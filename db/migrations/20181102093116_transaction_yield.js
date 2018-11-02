exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('transactions', (table) => {
        table.float('yield').notNullable();
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('transactions', (table) => {
        table.dropColumn('yield');
    }),
]);
