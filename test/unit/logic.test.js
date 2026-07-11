// Unit tests for the pure game logic. These run in Node (no browser) by loading
// the shipped dictionary.js + index.js into a sandbox. They focus on the parts
// that are hard to reach through the UI: the date -> word-index math (including
// leap years), the answer-list coverage (the browser date picker is clamped to
// today, so it can't reach far-future puzzles), guess sorting, and validation.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadGame } = require('./harness.cjs');

const g = loadGame();
const d = (y, m, day) => new Date(y, m - 1, day); // 1-based month for readability

test('isLeapYear follows the Gregorian rules', () => {
  assert.equal(g.isLeapYear(2020), true);
  assert.equal(g.isLeapYear(2021), false);
  assert.equal(g.isLeapYear(2028), true);
  assert.equal(g.isLeapYear(2000), true); // divisible by 400
  assert.equal(g.isLeapYear(1900), false); // divisible by 100, not 400
});

test('getDOY returns the day of the year', () => {
  assert.equal(g.getDOY(d(2023, 1, 1)), 1);
  assert.equal(g.getDOY(d(2023, 12, 31)), 365);
  assert.equal(g.getDOY(d(2024, 3, 1)), 61); // leap year: Jan(31)+Feb(29)+1
  assert.equal(g.getDOY(d(2023, 3, 1)), 60); // non-leap: Jan(31)+Feb(28)+1
});

test('getWordIndex increases by exactly one per calendar day', () => {
  const base = d(2026, 7, 10);
  const next = d(2026, 7, 11);
  assert.equal(g.getWordIndex(next) - g.getWordIndex(base), 1);
});

test('getWordIndex handles the leap day and year boundaries', () => {
  // Feb 28 -> Feb 29 in a leap year is a single day.
  assert.equal(g.getWordIndex(d(2028, 2, 29)) - g.getWordIndex(d(2028, 2, 28)), 1);
  // Dec 31 -> Jan 1 across a year boundary is a single day.
  assert.equal(g.getWordIndex(d(2031, 1, 1)) - g.getWordIndex(d(2030, 12, 31)), 1);
});

test('the very first date (2023-07-25) has no puzzle', () => {
  const word = g.getWord(d(2023, 7, 25));
  assert.equal(typeof word, 'string');
  assert.equal(word.trim().length, 0);
});

test('today and near-term dates resolve to real answers', () => {
  const today = g.getWord(g.now());
  assert.equal(typeof today, 'string');
  assert.ok(today.trim().length > 0, 'today should have a word');
  assert.ok(g.isAValidWord(today), 'today\'s answer should be a valid guess');
});

test('the expanded answer list covers every day through 2038-05-10', () => {
  // Walk a full decade of daily puzzles; every one must be a non-empty word
  // that is itself a guessable dictionary word.
  let date = d(2023, 7, 26); // first real answer, the day after FIRST_DATE
  const end = d(2038, 5, 10);
  let count = 0;
  while (date <= end) {
    const word = g.getWord(date);
    assert.ok(
      typeof word === 'string' && word.trim().length > 0,
      `expected a word for ${date.toDateString()}, got ${JSON.stringify(word)}`,
    );
    assert.ok(g.isAValidWord(word), `answer "${word}" for ${date.toDateString()} must be a valid guess`);
    date = new Date(date.getTime() + 86400000);
    count += 1;
  }
  assert.ok(count > 5000, `expected 10+ years of puzzles, walked ${count}`);
});

test('dates beyond the answer list have no puzzle', () => {
  assert.equal(g.getWord(d(2039, 1, 1)), undefined);
});

test('sanitizeGuess lowercases and strips non-letters', () => {
  assert.equal(g.sanitizeGuess('  Apple '), 'apple');
  assert.equal(g.sanitizeGuess("DON'T-STOP"), 'dontstop');
  assert.equal(g.sanitizeGuess('a1b2c3'), 'abc');
  assert.equal(g.sanitizeGuess('   '), '');
});

test('isAValidWord accepts Scrabble words and rejects junk', () => {
  assert.equal(g.isAValidWord('apple'), true);
  assert.equal(g.isAValidWord('zebra'), true);
  assert.equal(g.isAValidWord('zzzzzz'), false);
  assert.equal(g.isAValidWord('http'), false);
  assert.equal(g.isAValidWord(''), false);
});

test('getComparisonToTargetWord classifies guesses relative to the answer', () => {
  const target = { word: 'exit' };
  assert.equal(g.getComparisonToTargetWord.call(target, 'exit'), 'win');
  assert.equal(g.getComparisonToTargetWord.call(target, 'apple'), 'after'); // apple < exit
  assert.equal(g.getComparisonToTargetWord.call(target, 'zebra'), 'before'); // zebra > exit
});

test('generateGuessList filters and sorts around the answer', () => {
  const guesses = ['zebra', 'apple', 'orange', 'banana'];
  const word = 'mango';
  // "after" = guesses that come before the answer alphabetically (word > guess)
  assert.deepEqual([...g.generateGuessList('after', guesses, word)], ['apple', 'banana']);
  // "before" = guesses that come after the answer alphabetically (word < guess)
  assert.deepEqual([...g.generateGuessList('before', guesses, word)], ['orange', 'zebra']);
});

test('insertIntoSortedArray keeps the array in ascending order', () => {
  const arr = [];
  ['mango', 'apple', 'zebra', 'banana'].forEach((w) => g.insertIntoSortedArray(arr, w));
  assert.deepEqual(arr, ['apple', 'banana', 'mango', 'zebra']);
});
