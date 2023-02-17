import { test, expect } from "@playwright/test";

test("should have documentataion title", async ({ page }) => {
  await page.goto("http://localhost:3000/docs");

  await expect(page).toHaveTitle(/Documentation$/);
});

test("should have been redirected", async ({ page }) => {
  await page.goto("http://localhost:3000/docs");

  await expect(page).toHaveURL(/\/docs\/introduction$/);
});

test("should have introduction heading", async ({ page }) => {
  await page.goto("http://localhost:3000/docs/introduction");

  const h1 = page.getByRole("heading", { name: /^Introduction$/ });

  expect(await h1.textContent()).toMatch(/^Introduction$/);
});

test("should have character heading", async ({ page }) => {
  await page.goto("http://localhost:3000/docs/character");

  const h1 = page.getByRole("heading", { name: /^Character$/ });

  expect(await h1.textContent()).toMatch(/^Character$/);
});

test("should have location heading", async ({ page }) => {
  await page.goto("http://localhost:3000/docs/location");

  const h1 = page.getByRole("heading", { name: /^Location$/ });

  expect(await h1.textContent()).toMatch(/^Location$/);
});

test("should have episode heading", async ({ page }) => {
  await page.goto("http://localhost:3000/docs/episode");

  const h1 = page.getByRole("heading", { name: /^Episode$/ });

  expect(await h1.textContent()).toMatch(/^Episode$/);
});

test("should enter in not found page", async ({ page }) => {
  await page.goto("http://localhost:3000/docs/not-found");

  const h1 = page.getByRole("heading", { name: /^.*page$/ });

  expect(await h1.textContent()).toMatch(/^You you broke the page$/);
});

test("should have documentation links", async ({ page }) => {
  await page.goto("http://localhost:3000/docs");

  const nav = page.getByRole("main").getByRole("navigation");

  for (const li of await nav.getByRole("listitem").all()) {
    for (const link of await li.getByRole("link").all()) {
      expect(await link.getAttribute("href")).toMatch(/^\/docs.*$/);
    }
  }
});
