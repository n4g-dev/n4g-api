/* eslint-disable no-console */

// transactions-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'transactions';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.timestamp('date');
        table.enu('payment', ['unpaid', 'paid', 'partially paid']);
        table.float('cost').notNullable();
        table.float('amountPaid').notNullable().defaultTo(0);

        table.integer('productId').notNullable();
        table.foreign('productId').references('products.id');

        table.integer('supplierId').notNullable();
        table.foreign('supplierId').references('suppliers.id');

        table.integer('collectorId').notNullable();
        table.foreign('collectorId').references('users.id');

        table.integer('currencyId').notNullable();
        table.foreign('currencyId').references('currencies.id');

        table.timestamp('createdAt').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updatedAt').notNullable().defaultTo(db.raw('now()'));

        table.enu('status', ['collected', 'shipped', 'delivered']);
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};
