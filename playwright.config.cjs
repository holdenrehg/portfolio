const devices = require('@playwright/test');

module.exports = {
    testMatch: 'tests/endpoint/**/*.test.js',
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
    },
    webServer: {
        command: 'svelte-kit dev --port=2999 >/dev/null 2>&1',
        port: 2999,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        // Desktops...
        {
            name: 'Desktop Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Desktop Firefox',
            use: { browserName: 'firefox' },
        },
        // Mobile...
        {
            name: 'Mobile Chrome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile Firefox',
            use: {
                browserName: 'firefox',
                use: devices['Pixel 5'],
            },
        },
    ],
};
