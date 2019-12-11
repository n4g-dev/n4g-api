exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.dropColumn('birthDate');
	}),
]);

exports.down = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.date('birthDate');
	}),
]);
