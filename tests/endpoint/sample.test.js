import { test, expect } from '@playwright/test';

test('sample', async ({ page }) => {
    let response = await page.goto('/');
    expect(response.status()).toBe(200);

    response = await page.goto('/books');
    expect(response.status()).toBe(200);

    response = await page.goto('/notreal');
    expect(response.status()).toBe(404);
});
