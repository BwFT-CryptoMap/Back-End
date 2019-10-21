const db = require(dbConfig)
module.exports={
    find,
    findAllById,
    remove,
    add,
    editById,
    findWatchlistByUserId
}
const table='users'
function find(){
    return db(table)
}
function findAllById(id){
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
    .then(findById(id))
}
function findWatchlistByUserId(userId){
    return db(`${table} as w`)
    .join('users as u', 'u.id', 'w.user-id')
  .select('*')
}
