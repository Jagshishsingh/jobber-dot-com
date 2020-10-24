const mongoose = require('mongoose');
const router = require('express').Router();
// mongoose model for aspirants
const aspirantModel = require('../models/aspirantModel');

{/*--------------------------------------------CREATE----------------------------------------------*/ }


// adds a new user/aspirant
router.post('/addUser', function (req, res) {
    
    
    //first apply express vaidator

    // name, email, password, dob, address is expected in request body    
    const temp = new aspirantModel(req.body);
    temp.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                message: 'Error in sending data...',
                error: err
            });
        }

        // created result is returned
        return res.json({ result: result });
        
    })
});


// adds info about existing user regarding 

router.post('/addInfo/:_id/:field', function (req, res) {
    // academics , workExperience,projects,achievements,skills
    // here aspirantId is expected in route params and the field name, given in above line
    const field = req.params.field;
    aspirantModel.findByIdAndUpdate(req.params._id, {
        $push: {                                        // pushing into an existing list,empty in start
            [field]: req.body
        }
    }, function (error, result) {
        if (error) return res.status(500).json({ error });

        // confirmation is sent back
        return res.status(1);
    })
});

{/*------------------------------------------------READ-----------------------------------------------*/ }

// use to access specific fields of user 
// "field" key is expected in request body , list of all the fields required 
// router.post('/info/:_id', function (req, res) {


//     if (!req.body.fields) {
//         aspirantModel.findById(req.params._id, function (error, data) {
//             if (error) return res.json({ error });
//             // required fields are returned in JSON format
//             return res.json({ data });
//         })
//     }
//     // temporary storing fields in key value pair to use in mongoose projection
//     // where value is 1 for required fields
//     const fields = {}
//     req.body.fields.forEach(element => { fields[element] = 1 });

//     aspirantModel.findById(req.params._id, fields, function (error, data) {
//         if (error) return res.json({ error });
//         // required fields are returned in JSON format
//         return res.json({ data });
//     })
// })
router.post('/info/:userName', function (req, res) {


    if (!req.body.fields) {
        aspirantModel.find({userName=req.params.userName}, function (error, data) {
            if (error) return res.json({ error });
            // required fields are returned in JSON format
            return res.json({ data });
        })
    }
    // temporary storing fields in key value pair to use in mongoose projection
    // where value is 1 for required fields
    const fields = {}
    req.body.fields.forEach(element => { fields[element] = 1 });

    aspirantModel.find({userName=req.params.userName}, fields, function (error, data) {
        if (error) return res.json({ error });
        // required fields are returned in JSON format
        return res.json({ data });
    })
})


{/*----------------------------------------------UPDATE-------------------------------------------*/}

router.post('/updateInfo/:aspirantId',function(req,res){
    aspirantModel.findByIdAndUpdate(req.params.aspirantId,{
        $set:req.params.body},function (error, data) {
            if (error) return res.json({ error });
            // confirmation is sent
            return res.status(1);
        }
        
        )
})


{/*------------------------------------------------DELETE------------------------------------------*/}

// delete the whole test by _id
router.delete('/:testId/deleteTest',function(req,res){
    testModel.findByIdAndDelete(testId,function(err,result){
        if (err) return res.json({ error: err });

        return res.status();
    })
})


{/*---------------------------------------MODULE-EXPORT------------------------------------------*/}

module.exports = router
