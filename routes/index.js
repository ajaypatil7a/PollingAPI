// Getting required module
const express = require('express')
const router = express.Router()
// Getting home controller
const homeController = require('../controller/home');
// Making Routes for the home, question and option
router.get('/', homeController.home);
router.use('/question', require('./questions'));
router.use('/options', require('./options'))
// Exporting the router
module.exports = router