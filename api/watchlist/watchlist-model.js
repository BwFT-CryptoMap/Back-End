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
    console.log(id)
    return db('watchlist')
    .where({'user-id': id})
}
function remove(id) {
    return db('watchlist')
    .where({id})
    .del()
}
function editById(id,update){
    return db(table)
    .where({ id })
    .update(update, '*');
}
function add(obj){
    console.log(obj)
    return db('watchlist')
    .insert(obj)
}
function findWatchlistByUserId(userId){
    return db(`${table} as w`)
    .join('users as u', 'u.id', 'w.user-id')
  .select('*')
}
