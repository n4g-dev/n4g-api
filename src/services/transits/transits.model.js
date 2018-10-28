/* eslint-disable no-console */

// transits-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'transits';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.timestamp('started').notNullable();
        table.string('journey').comment('String of gps locations throughout the journey');
        table.timestamp('ended');
        table.integer('transactionId').notNullable();
        table.foreign('transactionId').references('transactions.id');
        table.timestamp('createdAt').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updatedAt').notNullable().defaultTo(db.raw('now()'));
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};
