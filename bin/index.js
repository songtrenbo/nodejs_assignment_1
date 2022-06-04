#!/usr/bin/env node
var generate_app = require("./lib/mvc_structure.js");
var generate_database = require("./lib/database.js");
switch (process.argv[2]) {
  case "create-all":
    generate_app.create_mvc_structure();
    generate_database.create_database();
    break;
  case "create-mvc":
    generate_app.create_mvc_structure();
    break;
  case "create-database":
    generate_database.create_database();
    break;
  case "help":
    console.log(
      `Option:\n- create-all: create mvc structure and database\n- create-mvc: create mvc structure\n- create-database: create database structure`
    );
    break;
  default:
}
