
const mysql = require("mysql")

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'tarique',
        database: 'saral'
    }
});