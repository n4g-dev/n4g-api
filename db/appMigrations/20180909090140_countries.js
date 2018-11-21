
exports.up = async (knex) => {
	await knex.schema.createTable('countries', (table) => {
		table.integer('id').primary();
		table.string('name').notNullable().unique();
		table.string('code').notNullable().unique();
		table.integer('currencyId');
		table.foreign('currencyId').references('currencies.id');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('countries'); };
