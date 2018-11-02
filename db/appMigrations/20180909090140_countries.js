
exports.up = async (knex) => {
	await knex.schema.createTable('countries', (table) => {
		table.increments('id');
		table.string('name').notNullable().unique();
		table.string('code').notNullable().unique();
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('countries'); };
