// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', // use the pg library as our psql clint
    connection: { //  configures how to connects to our database
      database: 'wadd_knex' // tell knex to use this database
    },
    migrations: {
      tableName: "migrations",
      directory: "db/migrations"  // this te
    }

  },

};



