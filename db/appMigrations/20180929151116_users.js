
exports.up = async (knex) => {
	await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('otherNames');
    table.string('email');
    table.string('phone').notNullable();
    table.string('password').notNullable();
    table.integer('countryId').notNullable();
    table.foreign('countryId').references('countries.id');
    table.enu('roles', ['employee', 'admin', 'collector']);
    table.enu('status', ['active', 'inactive', 'blocked', 'frozen']);
    table.enu('confirmed', [true, false]).notNullable().defaultTo(false);
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
};

exports.down = async (knex) => { await knex.schema.dropTable('users'); };
