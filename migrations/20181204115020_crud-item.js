exports.up = function(knex, Promise) {
	return knex.schema.createTable('crud-item', (item) => {
		item.increments('id')
		item.string('title')
		item.string('content')
		item.string('link')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('crud-item')
}
