const asserts = {
    async verifySubtitle(){
        await this.expect.element('@stepSubTitle').text.to.contain('1 organization')
        await this.expect.element('@stepSubTitle').text.to.contain('1 user')
        await this.expect.element('@stepSubTitle').text.to.contain('1 bucket')
    },
    async verifyCrumbCompete(){
        await this.expect.element('@stepCrumbComplete').text.to.contain('Complete')
        await this.expect.element('@stepCrumbComplete').to.have.css('color').which.equals('rgba(246, 246, 248, 1)')
    }
}

const actions = {
    async clickQickStart(){
        await this.click('@quickStartButton')
    },
    async clickAdvanced(){
        await this.click('@advancedButton')
    }
}

module.exports = {
    commands: [actions, asserts],
    elements: {
        quickStartButton: {selector: '[data-testid=button--quick-start]'},
        advancedButton: {selector: '[data-testid=button--advanced]'},
        stepCrumbComplete: {selector: '[data-testid=nav-step--complete]'},
        stepSubTitle: {selector: 'h5.wizard-step--sub-title:first-of-type'}
    }
}
