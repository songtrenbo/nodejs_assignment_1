var fs = require("fs");
const { Input, AutoComplete } = require("enquirer");
const { modelMySQL, modelMongoDB } = require("./model_generate");
const { seedMySQL, seedMongoDB } = require("./seed_generate");
var exec = require("child_process").exec,
  child;

function create_database() {
  var dirConnection = "./models/index.js";
  const chooseDB = new AutoComplete({
    name: "database",
    message: "Choose your database: ",
    // limit: 20,
    initial: 0,
    choices: ["MySql", "MongoDb"],
  });
  const run = async () => {
    const database = await chooseDB.run();

    if (database == "MySql") {
      fs.writeFile(
        dirConnection,
        `const { CreateUserTable } = require("./entities/user");
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
var knex = require("knex")({ client: "mysql", connection: conn });
CreateUserTable(knex);
UserData(knex);               
    `,
        function (err) {
          if (err) throw err;
          console.log("Database is created successfully.");
        }
      );
      child = exec("npm install knex mysql", function (error) {
        if (error !== null) {
          console.log("exec error: " + error);
        }
      });
      modelMySQL();
      seedMySQL();
    }

    if (database == "MongoDb") {
      child = exec(`npm install mongoose`, function (error) {
        if (error != null) {
          console.log(`exec error: ${error}`);
        }
      });
      fs.writeFile(
        dirConnection,
        `// To create DB, we need MongoClient object
        const { seedUsers } = require("./seed/userData.js");
        const User = require("./entities/user.js");
        const mongoose = require("mongoose");
        
        const url = "mongodb://localhost:27017/SalaryChange";
        mongoose
          .connect(url)
          .then(() => console.log("Mongoose connection open"))
          .catch((err) => console.log(err));
        const seedDB = async () => {
          await User.deleteMany({});
          await User.insertMany(seedUsers);
        };
        
        seedDB().then(() => {
          mongoose.connection.close();
        });
        
                `,
        function (err) {
          if (err) throw err;
          console.log("Database is created successfully.");
        }
      );

      child = exec("npm i mongoose", function (error) {
        if (error !== null) {
          console.log("exec error: " + error);
        }
      });
      modelMongoDB();
      seedMongoDB();
    }
  };
  run();
}
module.exports = {
  create_database,
};
