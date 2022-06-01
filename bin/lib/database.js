var fs = require("fs");
const { Input, AutoComplete } = require("enquirer");
const {modelMySQL} = require("./model_generate");
const {seedMySQL} = require("./seed_generate");
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
        `const User = require("./entities/user");
const {SeedUser} = require("./seed_data/userData");
function connection() {
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
  User.createUserTable(knex);
  SeedUser(knex);
}
module.exports = {
  connection,
};        
`,
        function (err) {
          if (err) throw err;
          console.log("Database is created successfully.");
        }
      );

      child = exec("npm i knex mysql", function (error) {
        if (error !== null) {
          console.log("exec error: " + error);
        }
      });
      modelMySQL();
      seedMySQL();
    }

    if (database == "MongoDb") {
      fs.writeFile(
        dirConnection,
        `// To create DB, we need MongoClient object
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/"
const dbName = 'SalaryChange';

mongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
    if (err) throw err;
    console.log("Connect to Database!");
    const db = client.db(dbName);
    const query = {
        name: 'NashTech'
    };

    const result = await findOne(db, 'customers', query);
    console.log('Ket qua: ', result);
    await client.close();
});

const findOne = async (db, collectionName, query) => {
    try {
        // Get document of collection
        const collection = db.collection(collectionName);
        return await collection.findOne(query);
    } catch (err) {
        throw err
    }
}`,
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
    }
  };
  run();
}
module.exports = {
  create_database,
};
