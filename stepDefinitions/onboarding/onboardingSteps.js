import { client } from 'nightwatch-api';
import { Given, Then, When } from 'cucumber';
import { flush, config, defaultUser } from '../../utils/InfluxUtils';

var splash = client.page.splashPage()
var setupPage = client.page.initialSetupPage()
var readyPage = client.page.readyPage()


Given('I open the Influx onboarding page', async () => {
    await flush()
    await client.url(`http://${config.host}:${config.port}${config.def_ctx}`)
})

Then('there is a Welcome message', async() => {
    await splash.welcomeHeaderVisible()
})

Then('there is a link to corporate', async() => {
    await splash.corporateLinkTextCorrect()
    await splash.corporateLinkCorrect()
})

When('I click on Get Started', async() => {
    await splash.clickStart()
})

Then('the Initial Setup Page is loaded', async() => {

    await setupPage.headerContains('Setup')
    await setupPage.crumbStepContains('nav-step--welcome','Welcome')
    await setupPage.crumbStepContains('nav-step--setup','Setup')

})

When(/^enter a new user name "(.*?)"$/, async name => {
    await setupPage.enterUserName((name === 'DEFAULT') ? defaultUser.name : name)
})

When(/^enter a new password "(.*?)"$/, async password => {
    await setupPage.enterPassword((password === 'DEFAULT') ? defaultUser.password : password)
})

When(/^enter confirm the new password "(.*?)"$/, async password => {
    await setupPage.enterPasswordChk((password === 'DEFAULT') ? defaultUser.password : password)
})

When(/^enter enter a new organization name "(.*?)"$/, async orgname => {
    await setupPage.enterOrgName((orgname === 'DEFAULT') ? defaultUser.orgname : orgname)
})

When(/^enter a new bucket name "(.*?)"$/, async bucketname => {
    await setupPage.enterBucketName((bucketname === 'DEFAULT') ? defaultUser.bucketname : bucketname)
})

When(/^click next from setup page$/, async () => {
    await setupPage.clickNext();
})

Then(/^verify ready page$/, async () => {
    await readyPage.verifySubtitle()
    await readyPage.verifyCrumbCompete()

})

When(/^click quick start button$/, async () => {
    await readyPage.clickQickStart()
})

When(/^click advanced button$/, async() => {

})


