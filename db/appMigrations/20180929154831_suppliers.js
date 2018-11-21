
exports.up = async (knex) => {
	await knex.schema.createTable('suppliers', (table) => {
        table.integer('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('about').notNullable();
        table.enu('gender', ['female', 'male']);
        table.string('phoneNumber').notNullable().defaultTo('------');
        table.date('birthDate');

        table.integer('organizationId').nullable();
        table.foreign('organizationId').references('organizations.id');

        table.integer('communityId').notNullable();
        table.foreign('communityId').references('communities.id');
        table.string('membershipCode').notNullable();
        table.integer('productId');
        table.foreign('productId').references('products.id');
		table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
		table.datetime('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('suppliers'); };
