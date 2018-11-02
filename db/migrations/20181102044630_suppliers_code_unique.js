exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.unique('membershipCode');
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('suppliers', (table) => {
        table.dropUnique('membershipCode');
    }),
]);
