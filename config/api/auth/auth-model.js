const db = require('../../../data/dbConfig')
module.exports={
    find,
    findById,
    remove,
    add,
    editById,
    findByUsername
}
const table='users'
function find(){
    return db(table)
}
function findByUsername(username) {
    return db(table)
    .where({username})
    .first()
}
function findById(id){
    return db(table)
    .where({id})
    .first()
}
function remove(id) {
    return db(table)
    .where({id})
    .del()
}
function editById(id,update){
    return db(table)
    .where({ id })
    .update(update, '*');
}
function add(obj){
    return db(table)
    .insert(obj)
    .then(([id]) => findById(id))
}
