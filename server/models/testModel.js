const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    title: String,
    companyName: String,
    questions:
        [
            {   
                question: String,
                questionType: String,
                options: [
                    {
                        choiceId: String,
                        choice: String,
                    }
                ],

            }
        ],
    answersAndMarks: [
        {   
            answerId: [String],
            positiveMarks: Number,
            negativeMarks: Number,
        }
    ]

})

const testModel = mongoose.model('tests', testSchema);

module.exports = testModel;