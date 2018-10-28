// Initializes the `transits` service on path `/transits`
const createService = require('feathers-knex');
const createModel = require('./transits.model');
const hooks = require('./transits.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'transits',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transits', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transits');

  service.hooks(hooks);
};
  