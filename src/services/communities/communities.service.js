// Initializes the `communities` service on path `/communities`
const createService = require('feathers-knex');
const createModel = require('./communities.model');
const hooks = require('./communities.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'communities',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/communities', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('communities');

  service.hooks(hooks);
};
