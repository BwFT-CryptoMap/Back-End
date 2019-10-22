exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("username", 50)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    })
    .createTable("watchlist", watchlist => {
      watchlist.increments();
      watchlist
        .integer("coin-id")
        .unsigned()
        .notNullable();
      watchlist
        .integer("user-id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      watchlist.unique(['coin-id','user-id'])
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('watchlist')
  .dropTableIfExists('users')
};
