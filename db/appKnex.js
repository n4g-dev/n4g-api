const config = require('../knexfile.js')['app'];

module.exports = require('knex')(config);
