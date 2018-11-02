const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [auth.hooks.authenticate('jwt')],
    create: [
      local.hooks.hashPassword({ passwordField: 'password' })
    ],
    update: [auth.hooks.authenticate('jwt')],
    patch: [auth.hooks.authenticate('jwt')],
    remove: [auth.hooks.authenticate('jwt')],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
