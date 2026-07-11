# alphafun

A daily word-guessing game. Guess the word of the day; each guess reveals
whether the answer comes **before** or **after** your guess alphabetically,
squeezing you toward the answer.

It is a fully static, frontend-only app (Vue 3 loaded from a vendored script,
plus a bundled dictionary) with no backend, build step, or database. It can be
served by any static host — it is deployed here via GitHub Pages, and also runs
on a plain Apache/LAMP document root.

## Play locally

```sh
npm run serve   # serves the repo root at http://localhost:8080
```

Or open `index.html` through any static file server.

## Tests

```sh
npm install                              # install dev dependencies
npx playwright install chromium          # one-time: fetch the test browser
npm test                                 # unit + end-to-end
```

- `npm run test:unit` — fast, browser-free unit tests of the game logic
  (date→word math incl. leap years, answer-list coverage, guess sorting,
  Scrabble-word validation). See `test/unit/`.
- `npm run test:e2e` — Playwright tests that drive the real UI in Chromium
  (guessing, before/after brackets, invalid-word errors, win, give up, the
  no-puzzle date, and `localStorage` persistence). See `test/e2e/`.

Both suites run in CI on every push and pull request (`.github/workflows/test.yml`).

## Project layout

| Path | Purpose |
| --- | --- |
| `index.html` | Markup and Vue template |
| `index.js` | Game logic, Vue bootstrap, and the daily answer list |
| `dictionary.js` | Trie of ~267k valid guess words |
| `assets/` | Styles and the vendored Vue 3 build |
| `test/` | Unit tests, E2E tests, and a zero-dependency static server |
