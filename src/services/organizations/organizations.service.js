// Initializes the `organizations` service on path `/organizations`
const createService = require('feathers-knex');
const createModel = require('./organizations.model');
const hooks = require('./organizations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'organizations',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/organizations', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('organizations');

  service.hooks(hooks);
};
  