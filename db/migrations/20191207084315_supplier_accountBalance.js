exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.float('accountBalance').notNullable().defaultTo(0.00);
	}),
]);

exports.down = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.dropColumn('accountBalance');
	}),
]);
