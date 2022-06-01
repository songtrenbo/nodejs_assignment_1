var fs = require("fs");
function create_mvc_structure() {
  var dirController = "./controllers";
  var dirModel = "./models";
  var dirView = "./views";
  var dirRoute = "./routes";
  var dirIndex = "./index.js";
  var dirHomeView = "./views/home.ejs";
  var dirHomeController = "./controllers/homeController.js";
  var dirHomeRoute = "./routes/home.js";

  if (!fs.existsSync(dirController)) {
    fs.mkdirSync(dirController);
  }
  if (!fs.existsSync(dirModel)) {
    fs.mkdirSync(dirModel);
  }
  if (!fs.existsSync(dirView)) {
    fs.mkdirSync(dirView);
  }
  if (!fs.existsSync(dirRoute)) {
    fs.mkdirSync(dirRoute);
  }
  fs.writeFile(
    dirIndex,
    `const express = require('express')
const connect = require('./models/index');
const app = express()
app.set('view engine', 'ejs');
connect.connection();
app.use('/', require('./routes/home'));
const port = 3000;
app.listen(port, () => console.log(\`Server running on: http://localhost:\${port}\`))`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    dirHomeController,
    `const homeView = (req, res) => {
    res.render("home",{
    });
  }
  
  module.exports = {
    homeView
  }`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    dirHomeRoute,
    `const express = require('express')
  const {homeView} = require('../controllers/homeController');
  const router = express.Router();
  router.get('/', homeView);
  
  module.exports = router;`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    dirHomeView,
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>MVC</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body><!-- Just an image -->
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
          </a>
        </nav>
    <body/>`,
    function (err) {
      if (err) throw err;
    }
  );
}
module.exports = {
  create_mvc_structure,
};
