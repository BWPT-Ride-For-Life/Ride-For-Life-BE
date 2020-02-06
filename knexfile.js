require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: "postgres://localhost/development",
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/data/migrations'
    },
    seeds: {
      directory: __dirname + '/data/seeds'
    },
  },
  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: "postgres://localhost/test",
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};