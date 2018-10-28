/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'users';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('otherNames');
        table.string('email');
        table.string('phone').notNullable();
        table.string('password').notNullable();
        table.integer('countryId').notNullable();
        table.foreign('countryId').references('countries.id');
        table.enu('role', ['employee', 'admin', 'collector']);
        table.enu('status', ['active', 'inactive', 'blocked', 'frozen']);
        table.enu('confirmed', [true, false]).notNullable().defaultTo(false);
        table.timestamp('createdAt').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updatedAt').notNullable().defaultTo(db.raw('now()'));
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};
