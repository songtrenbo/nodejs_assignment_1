var fs = require("fs");

function modelMySQL() {
  var dirEntities = "./models/entities";
  var dirEntitiesUser = "./models/entities/user.js";
  if (!fs.existsSync(dirEntities)) {
    fs.mkdirSync(dirEntities);
  }
  fs.writeFile(
    dirEntitiesUser,
    `function CreateUserTable(knex) {
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
    
    module.exports = {
      CreateUserTable,
    };
  `,
    function (err) {
      if (err) throw err;
    }
  );
}

function modelMongoDB() {
  var dirEntities = "./models/entities";
  var dirEntitiesUser = "./models/entities/user.js";
  if (!fs.existsSync(dirEntities)) {
    fs.mkdirSync(dirEntities);
  }
  fs.writeFile(
    dirEntitiesUser,
    ` const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  grossSalary: Number,
  netSalary: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;

  `,
    function (err) {
      if (err) throw err;
    }
  );
}



module.exports = {
    modelMySQL,
    modelMongoDB
}
