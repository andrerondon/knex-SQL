const knex = require("knex")
const knexfile = require("../knexfile.js")
const client = knex(knexfile.development)

module.exports = client