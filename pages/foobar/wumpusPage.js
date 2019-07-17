const asserts = {

    async failAssertion(){
        await this.expect.element("div[data-testid='div--wumpus']").to.be.present.before(100)
    }

}


module.exports = {
    commands: [asserts],
    elements: {}
}
