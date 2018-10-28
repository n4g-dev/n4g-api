/* eslint-disable no-console */

// currencies-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'currencies';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('symbol').notNullable();
        table.timestamp('createdAt').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updatedAt').notNullable().defaultTo(db.raw('now()'));
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};
