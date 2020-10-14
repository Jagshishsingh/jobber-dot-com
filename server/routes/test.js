const router = require('express').Router();
const bodyParser = require('body-parser');
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
router.post('/:_id/addQuestion/:type', function (req, res) {
    const type = req.params.type;
    testModel.findByIdAndUpdate(req.params._id, {
        $push: {
            [type]: req.body
        }
    }, function (err, data) {
        if (err) return res.json({ error: err });
        return res.json({ _id: data._id });
    })

});
router.get('/testFetch/:_id',function(req,res){
    testModel.findById(req.params._id,function (err,data) {
        if (err) return res.json({ error: err });

        for(var key in data){
            if (key.endsWith('Question')){
                questions=data[key]
                for(element in questions){
                    // WANT TO NOT SEND ANSWERS 
                    // delete element.answerId
                }
            }
        }
        res.json({data});

    })
})


module.exports = router
