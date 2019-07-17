const assertCommands = {

    async corporateLinkCorrect(){
       await this.assert.attributeContains('@creditsFooterLink', 'href','https://www.influxdata.com/')
    },

    async corporateLinkTextCorrect(){
        await this.expect.element('@creditsFooterLink').text.to.contains('InfluxData')
    },

    async welcomeHeaderVisible(){
        await this.expect.element('@welcomeHeader').to.be.visible
    }
}

const actionCommands = {

    async clickStart() {
        await this.click('@startButton', async response => {
            this.assert.ok(typeof response === "object")
        })
    }
}

module.exports = {
    commands: [actionCommands, assertCommands],
    elements: {
       welcomeHeader: {selector: 'h3[data-testid=\'init-step--head-main\']'},
       creditsFooterLink: {selector: '[data-testid=\'credits\'] a'},
       startButton: {selector: 'button[data-testid=\'onboarding-get-started\']'}
    }
}
