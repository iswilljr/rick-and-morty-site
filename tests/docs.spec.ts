import { test, expect } from '@playwright/test'

test('should have documentation title', async ({ page }) => {
  await page.goto('http://localhost:4173/docs/introduction')

  await expect(page).toHaveTitle(/Documentation$/)
})

test('should have introduction heading', async ({ page }) => {
  await page.goto('http://localhost:4173/docs/introduction')

  const h1 = page.getByRole('heading', { name: /^Introduction$/ })

  expect(await h1.textContent()).toMatch(/^Introduction$/)
})

test('should have character heading', async ({ page }) => {
  await page.goto('http://localhost:4173/docs/character')

  const h1 = page.getByRole('heading', { name: /^Character$/ })

  expect(await h1.textContent()).toMatch(/^Character$/)
})

test('should have location heading', async ({ page }) => {
  await page.goto('http://localhost:4173/docs/location')

  const h1 = page.getByRole('heading', { name: /^Location$/ })

  expect(await h1.textContent()).toMatch(/^Location$/)
})

test('should have episode heading', async ({ page }) => {
  await page.goto('http://localhost:4173/docs/episode')

  const h1 = page.getByRole('heading', { name: /^Episode$/ })

  expect(await h1.textContent()).toMatch(/^Episode$/)
})

test('should have documentation links', async ({ page }) => {
  await page.goto('http://localhost:4173/docs')

  const nav = page.getByRole('main').getByRole('navigation')

  for (const li of await nav.getByRole('listitem').all()) {
    for (const link of await li.getByRole('link').all()) {
      expect(await link.getAttribute('href')).toMatch(/^\/docs.*$/)
    }
  }
})
