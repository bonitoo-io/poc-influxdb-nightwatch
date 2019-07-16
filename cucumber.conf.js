const fs = require('fs');
const path = require('path')
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
const {
    client,
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    getNewScreenshots
} = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);

BeforeAll(async () => {
    await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
    await createSession();
});

let count = 0;

AfterAll(async () => {


    await closeSession();
    await stopWebDriver();
    setTimeout(() => {
        reporter.generate({
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                'App Version': '0.3.2',
                'Test Environment': 'POC'
            }
        });
    }, 1000);
});

After(async function() {
    let filename = path.resolve(__dirname, "testshot" + count++ + ".png")

    await client.saveScreenshot(filename, () => {})

 //   getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});
