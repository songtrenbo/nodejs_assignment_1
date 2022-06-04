const express = require('express')
const HomeController = require('../controllers/homeController');
const router = express.Router();
router.get('/', HomeController.homeView);
router.post('/', HomeController.calculate);
module.exports = router;