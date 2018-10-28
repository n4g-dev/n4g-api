exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('countries', (table) => {
    table.integer('currencyId').notNullable();
    table.foreign('currencyId').references('currencies.id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('countries', (table) => {
    table.dropForeign('currencyId');
    table.dropColumn('currencyId');
  }),
]);
