// TBD - leverage influxdbv2 REST API
const axios = require('axios');

const flush = () => {
    console.log('calling flush')
    axios.get('http://localhost:9999/debug/flush').then(response => {
        console.log("RESPONSE: " + response)
    }).catch(err => {
        console.log("ERROR: " + err)
    }).finally(() => {
        console.log("Finally ---")
    })
/*    cy.request({
        method: 'GET',
        url: '/debug/flush',
    }) */
}

module.exports = { flush }

flush()
