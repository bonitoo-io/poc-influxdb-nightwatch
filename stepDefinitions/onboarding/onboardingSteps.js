import { client } from 'nightwatch-api';
import { Given, Then, When } from 'cucumber';
import { flush, config } from '../../utils/InfluxUtils';

var splash = client.page.splashPage()


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
    /*
    await client.click('button[data-testid=\'onboarding-get-started\']', response => {
        client.assert.ok(typeof response === "object")
    })*/

    await splash.clickStart()
})

Then('the Initial Setup Page is loaded', async() => {

    await client.expect.element('h3[data-testid=\'admin-step--head-main\'] ').text.to.contain('Setup')
    await client.expect.element('div[data-testid=\'nav-step--welcome\']').text.to.contain('Welcome')
    await client.expect.element('div[data-testid=\'nav-step--setup\']').text.to.contain('Setup')

})
