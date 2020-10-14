const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    title: String,
    companyName: String,
    singleChoiceQuestion: 
            [
                {
                    question: String,
                    answerId: String,
                    options: [
                        {   
                            choiceId:String,
                            choice: String,
                        }
                    ],
                    positiveMarks: Number,
                    negativeMarks: Number,
                }
            ],
    multipleChoiceQuestion: 
            [
                {
                    question: String,
                    answersId: [
                        {
                            choiceId:String
                        }
                    ],
                    options: [
                        {   
                            choiceId:String,
                            choice: String,
                        }
                    ],
                    positiveMarks: Number,
                    negativeMarks: Number,
                }
            ]
   
})

const testModel = mongoose.model('tests', testSchema);

module.exports = testModel;