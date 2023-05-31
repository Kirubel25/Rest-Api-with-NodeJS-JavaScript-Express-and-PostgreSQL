const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sql_demo",
    password: "292112",
    port: 5432
})

module.exports = pool