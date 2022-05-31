var fs = require("fs");

function create_mvc_structure() {
  var dirController = "./controller";
  var dirModel = "./model";
  var dirView = "./view";

  if (!fs.existsSync(dirController)) {
    fs.mkdirSync(dirController);
  }
  if (!fs.existsSync(dirModel)) {
    fs.mkdirSync(dirModel);
  }
  if (!fs.existsSync(dirView)) {
    fs.mkdirSync(dirView);
  }
}
module.exports = {
  create_mvc_structure,
};
