const { CreateUserTable } = require("./entities/user");
const { UserData } = require("./seed/userData");
var conn = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 32769,
  charset: "utf8",
  database: "SalaryChange",
};

// connect without database selected
var knex = require("knex")({ client: "mysql", connection: conn});
CreateUserTable(knex);
UserData(knex);               
    