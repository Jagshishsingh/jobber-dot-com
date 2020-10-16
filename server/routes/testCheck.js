const router = require('express').Router();
const testModel = require('../models/testModel');
const aspirantModel = require('../models/aspirantModel');
const companyModel = require('../models/aspirantModel'); // HERE IT IS NOT CORRECT

router.post('/', function (req, res) {
    const testId = req.body.testId;
    const aspirantId = req.body.aspirantId;
    const companyId = req.body.companyId;
    const aspirantAnswers = req.body.answers;
    const questionIndex = 0;
    const aspirantMarks = 0;
    testModel.findById(testId, { "questions.answer": 1, "questions.positiveMarks": 1, "questions.negativeMarks": 1 }
        , function (err, data) {

            aspirantAnswers.forEach(answerIdList => {
                if (answerIdList === data.questions[questionIndex].answer) {
                    aspirantMarks += data.questions[questionIndex].positiveMarks;
                }
                else {
                    aspirantMarks -= Math.abs(data.questions[questionIndex].negativeMarks);
                }
                questionIndex += 1;
            });
        }).then(
            companyModel.updateOne({ $and: [{ _id: companyId }, { "aspirants._id": aspirantId }] }, {
                $set: {
                    "aspirants.$.marks": aspirantMarks
                }
            }, function (err, result) {
                if (err) return res.json({ error: err });
                return res.json({ result });
            })
        )


})





module.exports = router