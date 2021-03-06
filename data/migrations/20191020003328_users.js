exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("username")
        .notNullable()
        .unique();
        users.string("password").notNullable();
        users.string("email").notNullable();
    })
    .createTable("watchlist", watchlist => {
      watchlist.increments();
      watchlist
        .string("coin-id")
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
