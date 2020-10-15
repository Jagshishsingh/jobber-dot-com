const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    title: String,
    companyName: String,
    questions:
        [
            {   
                _id:{
                    type: Number,
                    required:true
                },
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
            _id:{
                type: Number,
                required:true
            },
            answerId: [String],
            positiveMarks: Number,
            negativeMarks: Number,
        }
    ]

})

const testModel = mongoose.model('tests', testSchema);

module.exports = testModel;