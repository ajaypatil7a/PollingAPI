// Getting required module
const express = require('express')
const router = express.Router()
// Getting option controller
const optionsController = require('../controller/options');
// Making routes for the options
router.post('/:id/create', optionsController.create);
router.get('/:id/add_vote', optionsController.add_vote);
router.delete('/delete/:id', optionsController.delete)
// Exporting the router 
module.exports = router