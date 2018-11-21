
exports.up = async (knex) => {
	await knex.schema.createTable('communities', (table) => {
        table.integer('id').primary();
		table.string('name').notNullable();
		table.integer('districtId');
		table.foreign('districtId').references('districts.id')
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('communities'); };
