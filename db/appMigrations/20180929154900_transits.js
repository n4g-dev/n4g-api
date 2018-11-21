
exports.up = async (knex) => {
	await knex.schema.createTable('transits', (table) => {
        table.integer('id').primary();
        table.timestamp('started').notNullable();
        table.string('journey').comment('String of gps locations throughout the journey');
        table.timestamp('ended');
        table.integer('transactionId').notNullable();
        table.foreign('transactionId').references('transactions.id');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('transits'); };
