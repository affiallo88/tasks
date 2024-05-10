const { Pool } = require("pg");

const pool = new Pool({
  user: "user",
  host: "db",
  database: "crud",
  password: "password1233",
  port: "3000",
});

module.exports = pool;
