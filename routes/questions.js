// Getting required module
const express = require('express')
const router = express.Router()
// Getting question controller
const questionController = require('../controller/questions')
// making routes for the questions
router.post('/create', questionController.create)
router.get('/view/:id', questionController.showDetails)
router.delete('/delete/:id', questionController.deleteQues)
router.use('/options', require('./options'))
// Exporting router
module.exports = router