exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.integer('age');
	}),
]);

exports.down = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.dropColumn('age');
	}),
]);
