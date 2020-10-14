const mongoose = require('mongoose');
const router = require('express').Router();
const aspirantModel = require('../models/aspirantModel');


router.post('/addUser', function (req, res) {
    //first apply express vaidator
    const temp = new aspirantModel(req.body);
    temp.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                message: 'Error in sending data...',
                error: err
            });
        }
        return res.json({ result: result });
    })
});

router.post('/addInfo/:_id/:field', function (req, res) {
    const field = req.params.field;
    aspirantModel.findByIdAndUpdate(req.params._id, {
        $push: {
            [field]: req.body
        }
    }, function (error, result) {
        if (error) return res.status(500).json({ error });
        return res.json({ result: result });
    })
});

router.post('/info/:_id',function(req,res){
    const fields = {}
    req.body.fields.forEach(element => { fields[element]=1 });
    // return res.send(fields);
    aspirantModel.findById(req.params._id,fields,function(error,data){
        if (error) return res.json({error});
        return res.json({data});
    })
})
module.exports = router
