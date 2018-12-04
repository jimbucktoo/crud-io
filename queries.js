const db = require('./database-connection')
module.exports = {
    getAll(){
        return db.select().from('crud-item')
    }
}
