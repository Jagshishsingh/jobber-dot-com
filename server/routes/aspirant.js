const mongoose = require('mongoose');
const router = require('express').Router();
const aspirantModel = require('../models/aspirantModel');


router.post('/addInfo',function(req,res){
    //first apply express vaidator
    const temp = new aspirantModel({
            name:{
                firstName:req.body.firstName,
                lastName:req.body.lastName
            },
            academics:[{
                startDate:req.body.startDate,
                endDate:req.body.endDate
            }]
    });;
    temp.save(function (err,result) {
        if(err){
            return res.status(500).json({
                message:'Error in sending data...',
                error:err
            });
        }
        return res.json({result:result});
    })
});


// router.post('/academicsInfo',function(req,res){
//     aspirantModel.updateOne({_id:req.body._id},{})
// })
module.exports = router
