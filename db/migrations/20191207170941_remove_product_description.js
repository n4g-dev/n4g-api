exports.up = (knex, Promise) => Promise.all([
	knex.schema.alterTable('products', (table) => {
		table.dropColumn('about');
		table.dropColumn('description');
	}),
]);

exports.down = () => {};
