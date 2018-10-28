exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('products', (table) => {
    table.string('about');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('products', (table) => {
    table.dropColumn('about');
  }),
]);
