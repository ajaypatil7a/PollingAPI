const Option = require('../models/options');
const Question = require('../models/questions');
const dotenv = require('dotenv').config();

// Creating the options for a question
module.exports.create = async function (req, res) {
    // Creating question and adding id of question to the option
    const opt = await Option.create({
        option: req.body.content,
        question: req.params.id,
    })
    // Adding the vote to the option using link
    const updateOption = await Option.findByIdAndUpdate(opt._id,
        { "add_vote": `http://localhost:${process.env.PORT || 5000}/options/${opt._id}/add_vote` }
    )
    // Saving it to the database
    updateOption.save()
    // now searching the question to add option
    const question = await Question.findById(req.params.id);

    if (question) {
        question.options.push(updateOption)
        // save option
        question.save()
        console.log(question)
        res.send(question)
    }
    else {
        res.send('Question does not exists...!')
    }
}

// Adding vote to the option
module.exports.add_vote = async function (req, res) {
    // Increament the vote by one
    const option = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } })
    if (option) {
        await option.save();
        console.log(option);
        res.send(option)
    }
    else {
        res.send('Option does not exits...!')
    }
}


// Delete the question 
module.exports.delete = async function (req, res) {
    // Getting the option from the database
    const option = await Option.findById(req.params.id);
    // Adding option to the question
    if (option) {
        const quesId = option.question;
        // Finding the option by id
        const question = await Question.findByIdAndUpdate(
            quesId, { $pull: { options: req.params.id } }
        );
        // Deeleting the option
        await Option.findByIdAndDelete(req.params.id)
        res.send('Option deleted...!')
    }
    else {
        res.send('Id does not exists...!')
    }
}
