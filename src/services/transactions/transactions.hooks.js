const auth = require('feathers-authentication');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [auth.hooks.authenticate('jwt')],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [auth.hooks.authenticate('jwt')],
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
