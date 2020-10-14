const mongoose = require('mongoose');
const router = require('express').Router();
const aspirantModel = require('../models/aspirantModel');


router.post('/addInfo', function (req, res) {
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

router.post('/academicsInfo/:_id', function (req, res) {
    aspirantModel.findByIdAndUpdate(req.params._id, {
        $push: {
            academics: req.body
        }
    }, function (error, result) {
        if (error) return res.status(500).json({ error });
        return res.send("DONE");
    })
});
module.exports = router
