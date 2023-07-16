const Question = require('../models/questions')
const Option = require('../models/options')

//  Creating the question 
module.exports.create = async function (req, res) {
    console.log(req.body)
    // Creating the question 
    const question = await Question.create(req.body);
    if(question){
        res.send(question);
    } else {
        console.log("Error in creating the question...!")
        
    }
}

// Showing question details
module.exports.showDetails = async function (req, res) {
    // Getting question from the database
    const question = await Question.findById(req.params.id).populate('options')
    if (question) {
        res.send(question);
    }
    // If question with the id is not found
    else {
        res.send("Id does not exits...!");
    }
}

// Deleting the question from db
module.exports.deleteQues = async function (req, res) {
    console.log(req.params.id)
    // Getting question from the db
    const ques = await Question.findById(req.params.id).clone().catch(function (err) { console.log(err) })
    if (ques) {
        // Deleting quetion from options
        await Option.deleteMany({ question: req.params.id }).clone().catch(function (err) { console.log(err) })
        // Deleting quetion
        await Question.deleteOne({_id: req.params.id}).clone().catch(function (err) { console.log(err) })
        res.send("Question deleted successfully...!");
    }
    else {
        res.send('Question does not exists...!')
    }
}
