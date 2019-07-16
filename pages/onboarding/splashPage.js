const assertCommands = {

    async corporateLinkCorrect(){
        this.assert.attributeContains('@creditsFooterLink', 'href','https://www.influxdata.com/')
    },

    async corporateLinkTextCorrect(){
        this.expect.element('@creditsFooterLink').text.to.contains('InfluxData')
    },

    async welcomeHeaderVisible(){
        this.expect.element('@welcomeHeader').to.be.visible
    }
}

const actionCommands = {

    async clickStart() {
        this.click('@startButton', response => {
          //  client.assert.ok(typeof response === "object") TODO - figure out why this line ends up with client destroyed in Step Defs ???
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
