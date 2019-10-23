// Update with your config settings.
const secret = require('./passwordsyo')


const staging = process.env.STAGE || secret.staging
const production = process.env.DATABASE_URL || secret.production

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dev.sqlite3",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations/",
    },
    seeds: {
      directory: "./data/seeds/",
    },
    // debug:true
  },

  staging: {
    client: "pg",
    connection: staging, 
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds/",
    },
  },

  production: {
    client: "pg",
    connection: production,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds/",
    },
    // debug:true
  },

};
