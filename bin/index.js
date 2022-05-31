#!/usr/bin/env node
var generate_app = require("./lib/mvc_structure.js");
var generate_database = require("./lib/database.js");
switch (process.argv[2]) {
  case "crmvc":
    generate_app.create_mvc_structure();
  case "crdb":
    generate_database.create_database();
  case "help":
    // console.log(process.argv);
    console.log(`Option:\n- crmvc: create mvc structure\n- crdb: create database structure`);
}
