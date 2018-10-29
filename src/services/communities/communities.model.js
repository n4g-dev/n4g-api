/* eslint-disable no-console */

// communities-model.js - A KnexJS
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'communities';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('districtId').notNullable();
        table.foreign('districtId').references('districts.id');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};
