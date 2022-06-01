var fs = require("fs");

function modelMySQL() {
  var dirEntities = "./models/entities";
  var dirEntitiesUser = "./models/entities/user.js";
  if (!fs.existsSync(dirEntities)) {
    fs.mkdirSync(dirEntities);
  }
  fs.writeFile(
    dirEntitiesUser,
    `async function createUserTable(knex) {
const exists = await knex.schema.hasTable("User");
if(!exists){
    knex.schema
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
}
module.exports = {
createUserTable,
};
`,
    function (err) {
      if (err) throw err;
    }
  );
}

module.exports = {
    modelMySQL,
}
