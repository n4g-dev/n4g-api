
exports.up = async (knex) => {
	await knex.schema.createTable('transactions', (table) => {
        table.integer('id').primary();
        table.timestamp('date');
        table.enu('payment', ['unpaid', 'paid', 'partially paid']);
        table.float('cost').notNullable();
        table.float('amountPaid').notNullable().defaultTo(0);

        table.integer('productId').notNullable();
        table.foreign('productId').references('products.id');

        table.integer('supplierId').notNullable();
        table.foreign('supplierId').references('suppliers.id');

        table.integer('collectorId').notNullable();
        table.foreign('collectorId').references('users.id');

        table.integer('currencyId').notNullable();
        table.foreign('currencyId').references('currencies.id');
        table.float('yield').notNullable();
        table.enu('status', ['collected', 'shipped', 'delivered']);
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('transactions'); };
