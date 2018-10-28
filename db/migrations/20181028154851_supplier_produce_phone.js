exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('suppliers', (table) => {
    table.string('phoneNumber');
    table.integer('productId').notNullable();
    table.foreign('productId').references('products.id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('suppliers', (table) => {
    table.dropColumn('phoneNumber');
    table.dropForeign('productId');
    table.dropColumn('productId');
  }),
]);
