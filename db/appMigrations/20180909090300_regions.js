
exports.up = async (knex) => {
	await knex.schema.createTable('regions', (table) => {
        table.integer('id').primary();
		table.string('name').notNullable();
		table.integer('countryId').notNullable();
		table.foreign('countryId').references('countries.id');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('regions'); };
