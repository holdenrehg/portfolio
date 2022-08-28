const devices = require('@playwright/test');

module.exports = {
    testMatch: 'tests/endpoint/**/*.test.js',
    workers: process.env.CI ? 2 : undefined,
    globalSetup: require.resolve('./tests/endpoint/setup'),
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
    },
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173,
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
