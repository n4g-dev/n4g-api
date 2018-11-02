exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.string('membershipCode').notNullable();
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.dropColumn('membershipCode');
    }),
]);
