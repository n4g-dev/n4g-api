exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('currencies', (table) => {
    table.string('symbol').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('currencies', (table) => {
    table.dropColumn('symbol');
  }),
]);
