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
                    String
                ],
                answer: [String],
                positiveMarks: Number,
                negativeMarks: Number,

            }
        ]

})

const testModel = mongoose.model('tests', testSchema);

module.exports = testModel;