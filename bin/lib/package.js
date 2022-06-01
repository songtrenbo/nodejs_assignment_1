var exec = require("child_process").exec,
  child;

function install_package() {
  child = exec("npm init -y", function (error) {
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
  child = exec("npm install express ejs", function (error) {
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}
module.exports = {
  install_package,
};
