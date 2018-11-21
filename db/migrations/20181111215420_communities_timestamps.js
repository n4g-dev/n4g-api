exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('communities', (table) => {
        table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'));
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('communities', (table) => {
        table.dropColumn('createdAt');
        table.dropColumn('updatedAt');
    }),
]);
