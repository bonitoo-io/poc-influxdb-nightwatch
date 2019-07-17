// TBD - leverage influxdbv2 REST API
const axios = require('axios');

const active_config = require('../bonitoo.conf.json').active
const config = require('../bonitoo.conf.json')[active_config]
const defaultUser = require('../bonitoo.conf.json').default_user

const flush = async () => {
    console.log('calling flush')
    await axios.get(`http://${config.host}:${config.port}/debug/flush`);
}

module.exports = { flush, config, defaultUser }

console.log(config.config_id);
console.log(config.host);
console.log(config.port)
console.log(config.def_ctx);

//flush()
