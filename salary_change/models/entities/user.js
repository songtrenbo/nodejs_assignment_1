
const {grossToNetSalary} = require("../../lib/grossToNet");
var conn = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 32769,
  charset: "utf8",
  database: "SalaryChange",
};
// connect without database selected
var knex = require("knex")({ client: "mysql", connection: conn });


async function CreateUserTable(knex) {
  await knex.schema
    .createTable("User", function (table) {
      table.increments("id").primary();
      table.string("firstName");
      table.string("lastName");
      table.integer("age");
      table.integer("grossSalary");
      table.integer("netSalary");
    })
    .then(function () {
      console.log("User table created");
      knex.destroy();
    });
}
async function listUser(callback) {
 await knex
    .select("id", "grossSalary", "netSalary")
    .from("User")
    .then((data) => {
      callback(data);
    });
}

function CalculateGrossToNet(gross, depend){
  var data = grossToNetSalary(gross, depend)
  const inputData = {
    grossSalary: gross,
    netSalary: data.netSalary,
  };  
  knex("User")
  .insert(inputData)
  .then();  
  return data;
}
module.exports = {
  CreateUserTable,
  listUser,
  CalculateGrossToNet
};
