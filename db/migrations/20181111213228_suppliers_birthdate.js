exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.date('birthDate');
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.dropColumn('birthDate');
    }),
]);
