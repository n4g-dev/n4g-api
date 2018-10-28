exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('communities', (table) => {
    table.integer('districtId').notNullable();
    table.foreign('districtId').references('districts.id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('communities', (table) => {
    table.dropForeign('districtId');
    table.dropColumn('districtId');
  }),
]);
