const router = require('express').Router();
const testModel = require('../models/testModel');


router.post('/addTest', function (req, res) {
    const temp = new testModel({
        title: req.body.title,
        companyName: req.body.companyName
    });
    temp.save(function (err, result) {
        if (err) return res.json({ error: err });
        return res.json({ _id: result._id });
    })
});
router.post('/:testId/addQuestion', function (req, res) {
    testModel.findByIdAndUpdate(req.params.testId, {
        $push: {
            "questions": req.body.question,
            "answersAndMarks": req.body.answerAndMarks
        }
    }, function (err, data) {
        if (err) return res.json({ error: err });
        return res.json({ _id: data._id });
    })

});
router.get('/fetch/:testId', function (req, res) {

    testModel.findById(req.params.testId, { answersAndMarks: 0 }, function (err, result) {
        if (err) return res.json({ error: err });
        // console.log(result)
        return res.json({ result });
    })

})

router.delete('/:testId/deleteQuestion/:questionNo', function (req, res) {
    testModel.update({ _id: req.params.testId }, { $unset: {
    [`answersAndMarks.${req.params.questionNo}`]: 1 } },
        function (err, result) {
            if (err) return res.json({ error: err });
            testModel.update({ _id: req.params.testId }, { $pull: { "questions": null,"answersAndMarks":null } }, function (err, result) {
                return;
            });
        })

})

module.exports = router
