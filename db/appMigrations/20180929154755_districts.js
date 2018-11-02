
exports.up = async (knex) => {
	await knex.schema.createTable('districts', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('regionId');
        table.foreign('regionId').references('regions.id');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('districts'); };
