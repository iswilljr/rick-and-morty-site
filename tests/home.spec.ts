import { test, expect } from '@playwright/test'

test('should have home page title', async ({ page }) => {
  await page.goto('http://localhost:4321/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/API$/)
})

test('should have home page heading', async ({ page }) => {
  await page.goto('http://localhost:4321/')

  const h1 = page.getByRole('heading', { name: /API/ })

  // Expects the URL to contain intro.
  expect(await h1.textContent()).toMatch(/^The Rick and Morty API$/)
})

test('should have api links', async ({ page }) => {
  await page.goto('http://localhost:4321/')

  for (const card of await page.getByRole('article').all()) {
    for (const link of await card.getByRole('link').all()) {
      expect(await link.getAttribute('href')).toMatch(/^.*therickandmortyapi.*\/api.*$/)
    }

    expect(await card.getByRole('img').getAttribute('src')).toMatch(/\.jpeg$/)
  }
})
