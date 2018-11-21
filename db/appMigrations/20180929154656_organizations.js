
exports.up = async (knex) => {
	await knex.schema.createTable('organizations', (table) => {
		table.integer('id').primary();
		table.string('name');
		table.string('about');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('organizations'); };
