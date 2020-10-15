const router = require('express').Router();
const testModel = require('../models/testModel');

{/*------------------------------------------CREATE--------------------------------------------*/}

// new test is initiated with title and company name
router.post('/addTest', function (req, res) {
    const temp = new testModel({
        title: req.body.title,
        companyName: req.body.companyName
    });
    temp.save(function (err, result) {
        if (err) return res.json({ error: err });

        // _id of that particular test is sent back
        return res.json({ _id: result._id });
    })
});


// question is added in existing test , using testId
router.post('/:testId/addQuestion', function (req, res) {

    // in request body ,question and answerAndMarks field is required
// which carries key-value pairs corrsponding to fields in testModel
    testModel.findByIdAndUpdate(req.params.testId, {
        $push: {
            "questions": req.body.question,
            "answersAndMarks": req.body.answerAndMarks
        }
    }, function (err, data) {
        if (err) return res.json({ error: err });
        // confirmation is returned
        return res.status(1);
    })
});


{/*--------------------------------------------READ----------------------------------------------*/}


// to fetch complete test
router.get('/fetch/:testId', function (req, res) {

    testModel.findById(req.params.testId, { answersAndMarks: 0 }, function (err, result) {
        if (err) return res.json({ error: err });
        // console.log(result)
        return res.json({ result });
    })

})

{/*------------------------------------------UPDATE-------------------------------------------------*/}

// updating a particular question
router.post('/:testId/updateQuestion/:questionId', function (req, res) {
    testModel.update({ $and: [{ "_id": req.params.testId }, { "questions._id": req.params.questionId }] },
    {$set:{"questions.$.question":"going bad ?"}},    
    function (err, result) {
            if (err) return res.json({ error: err });
            return res.json({result})
        })

})

{/*----------------------------------------DELETE-----------------------------------------------*/}


// delete a particular question
router.delete('/:testId/deleteQuestion/:questionNo', function (req, res) {
    testModel.update({ _id: req.params.testId }, {
        $unset: {
            [`questions.${req.params.questionNo}`]: 1,
            [`answersAndMarks.${req.params.questionNo}`]: 1
        }
    },
        function (err, result) {
            if (err) return res.json({ error: err });
            testModel.update({ _id: req.params.testId }, { $pull: { "questions": null, "answersAndMarks": null } }, function (err, result) {
                return;
            });
        })

})


// delete the whole test by _id
router.delete('/:testId/deleteTest',function(req,res){
    testModel.findByIdAndDelete(testId,function(err,result){
        if (err) return res.json({ error: err });

        return res.status();
    })
})

{/*------------------------------MODULE-EXPORT-----------------------------------*/}

module.exports = router



// TODO:
// care about 
