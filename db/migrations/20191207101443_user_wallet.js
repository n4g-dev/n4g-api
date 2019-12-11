exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('users', (table) => {
		table.float('wallet');
	}),
]);

exports.down = (knex, Promise) => Promise.all([
	knex.schema.alterTable('users', (table) => {
		table.dropColumn('wallet');
	}),
]);
