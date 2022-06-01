#!/usr/bin/env node
var generate_app = require("./lib/mvc_structure.js");
var generate_database = require("./lib/database.js");
var generate_package = require("./lib/package.js");
switch (process.argv[2]) {
  case "create-all":
    generate_package.install_package();
    generate_app.create_mvc_structure();
    generate_database.create_database();
    break;
  case "install-package":
    generate_package.install_package();
    break;
  case "create-mvc":
    generate_app.create_mvc_structure();
    break;
  case "create-database":
    generate_database.create_database();
    break;
  case "help":
    console.log(
      `Option:\n- create-all: create mvc structure and database\n- install-package: install all package of project\n- create-mvc: create mvc structure\n- create-database: create database structure`
    );
    break;
  default:
}
