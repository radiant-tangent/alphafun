const { test, expect } = require('@playwright/test');

// Returns today's answer straight from the game's own logic (both getWord and
// now are global functions in the shipped script), so the tests stay correct
// as the daily word changes.
async function todaysAnswer(page) {
  return page.evaluate(() => getWord(now()));
}

async function guess(page, word) {
  await page.fill('#new-guess', word);
  await page.click('#submit-guess');
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#new-guess')).toBeVisible();
});

test('shows the puzzle number and a live countdown', async ({ page }) => {
  await expect(page.locator('.puzzleno')).toContainText(/puzzle #\d+/);
  await expect(page.locator('.nextgame')).toContainText(/\d\d:\d\d:\d\d left/);
});

test('the removed hard-difficulty toggle is gone', async ({ page }) => {
  await expect(page.locator('.difficulty-toggle')).toHaveCount(0);
  await expect(page.locator('.difficulty')).toHaveCount(0);
});

test('no bracket labels are shown before the first guess', async ({ page }) => {
  await expect(page.locator('.bracket-label')).toHaveCount(0);
  await expect(page.locator('.guesslist li')).toHaveCount(0);
});

test('a valid guess lands in the correct bracket and is highlighted', async ({ page }) => {
  const answer = await todaysAnswer(page);
  const word = answer === 'apple' ? 'zebra' : 'apple';
  const isBefore = word > answer; // a guess after the answer goes in the "before" list
  const listSelector = isBefore ? '.before-guesses' : '.after-guesses';
  const labelText = isBefore ? /comes before/ : /comes after/;

  await guess(page, word);

  await expect(page.locator('.bracket-label', { hasText: labelText })).toBeVisible();
  const item = page.locator(`${listSelector} li`, { hasText: word });
  await expect(item).toBeVisible();
  // The single guess is the nearest bound, so it should be emphasized.
  await expect(item).toHaveClass(/nearest/);
});

test('an invalid word is rejected with a helpful message', async ({ page }) => {
  await guess(page, 'zzzzzz');
  await expect(page.locator('.error')).toContainText(/Scrabble/);
  await expect(page.locator('.guesslist li')).toHaveCount(0);
});

test('guessing the same word twice is rejected', async ({ page }) => {
  const answer = await todaysAnswer(page);
  const word = answer === 'apple' ? 'zebra' : 'apple';
  await guess(page, word);
  await guess(page, word);
  await expect(page.locator('.error')).toContainText(/already guessed/);
});

test('winning reveals the answer, hides the input, and persists across reload', async ({ page }) => {
  const answer = await todaysAnswer(page);
  await guess(page, answer);

  await expect(page.locator('.result.win')).toBeVisible();
  await expect(page.locator('.result .reveal')).toHaveText(answer);
  await expect(page.locator('#new-guess')).toHaveCount(0);
  await expect(page.locator('.result.win')).toContainText(/You got it/);

  // Reload: the solved game should be restored from localStorage.
  await page.reload();
  await expect(page.locator('.result.win')).toBeVisible();
  await expect(page.locator('.result .reveal')).toHaveText(answer);
  await expect(page.locator('#new-guess')).toHaveCount(0);
});

test('giving up reveals the answer', async ({ page }) => {
  const answer = await todaysAnswer(page);
  const word = answer === 'apple' ? 'zebra' : 'apple';
  await guess(page, word); // give up only appears after at least one guess
  page.once('dialog', (dialog) => dialog.accept()); // giveUp() asks for confirmation
  await page.click('.giveup');

  await expect(page.locator('.result.gaveup')).toBeVisible();
  await expect(page.locator('.result .reveal')).toHaveText(answer);
  await expect(page.locator('#new-guess')).toHaveCount(0);
});

test('a date with no puzzle shows a message and disables guessing', async ({ page }) => {
  // Drive the app to the one in-range date that has no word (2023-07-25) by
  // intercepting the game's own date-setter, then forcing that date.
  await page.evaluate(() => new Promise((resolve) => {
    const original = setNewPlayDate;
    window.setNewPlayDate = function (app, dateValue) {
      const result = original(app, dateValue);
      app.playDate = new Date(2023, 6, 25, 0, 0, 0); // 2023-07-25, before the first real answer
      resolve();
      return result;
    };
    document.querySelector('a.randomday').click();
  }));

  await expect(page.locator('.no-puzzle')).toBeVisible();
  await expect(page.locator('.no-puzzle')).toContainText(/No puzzle available/);
  await expect(page.locator('#new-guess')).toHaveCount(0);
});
