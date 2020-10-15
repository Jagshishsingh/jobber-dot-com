const router = require('express').Router();
const testModel = require('../models/testModel');
const aspirantModel = require('../models/aspirantModel');


router.post('/',function(req,res){
    const testId = req.body.testId;
    const aspirantId = req.body.aspirantId;
    testModel.findById(testId,function (err,data) {
        return;
    })


})





module.exports = router