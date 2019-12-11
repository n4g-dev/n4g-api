exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.string('about').nullable().alter();
	}),
]);

exports.down = (knex, Promise) => Promise.all([
	knex.schema.alterTable('suppliers', (table) => {
		table.string('about').notNullable().alter();
	}),
]);
