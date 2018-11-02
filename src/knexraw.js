global.getEnv = () => {
    if (process.env.NODE_ENV) {
        return process.env.NODE_ENV;
    }

    return 'development';
};

const config = require('../knexfile.js')[getEnv()];

module.exports = require('knex')(config);
