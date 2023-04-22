exports.config = {

    specs: [
        './test/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 4,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--whitelisted-ips=',
                '--disable-infobars=true', // note this does not remove "Chrome is being controlled by automated test software" notification
                '--disable-gpu',
                'window-size=1920,1080',
                'test-type=browser',
                'disable-notifications',
                'incognito',
                'disable-application-cache',
                '-disable-extensions', // used to bypass loading of extensions which will be blocked by MMC security policy anyway
                '--ignore-certificate-errors',
                'enable-automation',
                '--disable-dev-shm-usage',
                '--disable-browser-side-navigation',
                '--no-sandbox',
                '--enable-logging',
                // '--headless',
            ],
        },
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://oz.by/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    async afterTest(test, context, {
        error, result, duration, passed, retries,
    }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

};
