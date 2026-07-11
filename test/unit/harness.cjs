// Loads the game's production code (dictionary.js + index.js) into a sandbox so
// the pure game-logic functions can be unit tested without a browser.
//
// The app ships as a plain classic script (no build step, no module exports) so
// it can be served as-is on GitHub Pages. Top-level `function` declarations
// become properties of the script's global object, and top-level `const`s (such
// as `words` and `validWordTrie`) stay closed over by those functions. We only
// need to stub `document` because index.js registers a DOMContentLoaded handler
// at load time; that handler never runs here, so Vue is never touched.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..', '..');

function loadGame() {
  const dictionary = fs.readFileSync(path.join(root, 'dictionary.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'index.js'), 'utf8');

  const sandbox = {
    document: { addEventListener() {} },
    setInterval() {},
    clearInterval() {},
    console,
  };
  vm.createContext(sandbox);
  // Concatenate so both files share one lexical scope, mirroring how the
  // browser exposes top-level `const`s across classic <script> tags.
  vm.runInContext(`${dictionary}\n;\n${app}`, sandbox, { filename: 'alphafun.js' });
  return sandbox;
}

module.exports = { loadGame };
