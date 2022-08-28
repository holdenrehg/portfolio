import { test, expect } from '@playwright/test';
import { syncFindArticleSlugs } from '../../../src/lib/blog.js';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Articles should response with 200 status', () => {
    syncFindArticleSlugs(fs, path).forEach(slug => {
        test(`/blog/${slug}`, async ({ page }) => {
            const response = await page.goto(`/blog/${slug}`);
            expect(response.status()).toBe(200);
        });
    });
});
