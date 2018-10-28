// Initializes the `regions` service on path `/regions`
const createService = require('feathers-knex');
const createModel = require('./regions.model');
const hooks = require('./regions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'regions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/regions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('regions');

  service.hooks(hooks);
};
  