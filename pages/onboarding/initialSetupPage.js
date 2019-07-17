const asserts = {
    async headerContains(text){
       await this.expect.element('h3[data-testid=\'admin-step--head-main\'] ').text.to.contain(text)
    },

    async crumbStepContains(crumbId, text){
        await this.expect.element(`div[data-testid='${crumbId}']`).text.to.contain(text)
    }
}

const actions = {
    async enterUserName(name){
        await this.waitForElementVisible('@nameInput').setValue('@nameInput', name);
    },
    async enterPassword(password){
        await this.waitForElementVisible('@passwordInput').setValue('@passwordInput', password);
    },
    async enterPasswordChk(password){
        await this.waitForElementVisible('@passwordConfirmInput').setValue('@passwordConfirmInput', password);
    },
    async enterOrgName(name){
        await this.waitForElementVisible('@orgNameInput').setValue('@orgNameInput', name);
    },
    async enterBucketName(name){
        await this.waitForElementVisible('@bucketNameInput').setValue('@bucketNameInput', name);
    },
    async clickNext(){
        await this.click('@nextButton')
    }

}

module.exports = {
    commands: [actions, asserts],
    elements: {
        titleHead: {selector: 'h3[data-testid=\'admin-step--head-main\']'},
        stepCrumbWelcome: {selector: 'div[data-testid=\'nav-step--welcome\']'},
        stepCrumbSetup: {selector: 'div[data-testid=\'nav-step--setup\']'},
        nameInput: {selector: 'input[data-testid=input-field--username]'},
        passwordInput: {selector: 'input[data-testid=input-field--password]'},
        passwordConfirmInput: {selector: 'input[data-testid=input-field--password-chk]'},
        orgNameInput: {selector: 'input[data-testid=input-field--orgname]'},
        bucketNameInput: {selector: 'input[data-testid=input-field--bucketname]'},
        nextButton: {selector: '[data-testid=next]'}
    }
}
