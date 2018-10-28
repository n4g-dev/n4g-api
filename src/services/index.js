const suppliers = require('./suppliers/suppliers.service.js');
const users = require('./users/users.service.js');
const countries = require('./countries/countries.service.js');
const regions = require('./regions/regions.service.js');
const districts = require('./districts/districts.service.js');
const organizations = require('./organizations/organizations.service.js');
const currencies = require('./currencies/currencies.service.js');
const products = require('./products/products.service.js');
const transactions = require('./transactions/transactions.service.js');
const transits = require('./transits/transits.service.js');
const communities = require('./communities/communities.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(suppliers);
  app.configure(users);
  app.configure(countries);
  app.configure(regions);
  app.configure(districts);
  app.configure(organizations);
  app.configure(currencies);
  app.configure(products);
  app.configure(transactions);
  app.configure(transits);
  app.configure(communities);
};
