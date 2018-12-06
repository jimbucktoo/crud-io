const db = require('./database-connection')
module.exports = {
	getAll(){
		return db.select().from('crud-item')
	},
	getById(id){
		return db('crud-item').where('id', id).first()
	},
	createItem(item){
		return db('crud-item').insert(item).returning('*')
	},
	updateItem(id, updateItem){
		return db('crud-item').where("id", id).update(updateItem).returning('*')
	},
	deleteItem(id){
		return db('crud-item').where('id', id).delete()
	},
	deleteAll(){
		return db('crud-item').delete()
	}
}
