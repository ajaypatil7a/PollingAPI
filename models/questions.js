// Getting mongoose module
const mongoose = require('mongoose');
// Making question schema
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
})
// Exporing question schema
const Question = mongoose.model('Question', questionSchema)
module.exports = Question
