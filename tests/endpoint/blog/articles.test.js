import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

function articleNames() {
    const articlesPath = './src/lib/articles';
    const isDir = (src) => fs.lstatSync(src).isDirectory();
    return fs.readdirSync(articlesPath).filter((fileName) => isDir(path.join(articlesPath, fileName)));
}

test.describe('Articles should response with 200 status', () => {
    const slugs = articleNames();
    slugs.forEach((slug) => {
        test(`/blog/${slug}`, async ({ page }) => {
            const response = await page.goto(`/blog/${slug}`);
            expect(response.status()).toBe(200);
        });
    });
});
