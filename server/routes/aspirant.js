const mongoose = require('mongoose');
const router = require('express').Router();
var expressValidator=require('express-validator');
var expressSession=require('express-session');



const aspirantModel = require('../models/aspirantModel');

router.get('/',function(req,res){
    res.render('index',{ title:'Form Validation',success: false, error: req.session.errors});
    res.session.error=null;

});
router.post('/addUser', function (req, res) {
    
    
    //first apply express vaidator
    let email=req.body.email; 
    //let password=req.body.password;

    req.check('email','invalid email address').isEmail();
   // req.check('password','invalid password').isLength({min: 4});
    var error=req.validationErrors(req);
    if(error)
    {
        req.session.errors=errors;
        console.log(error);

    }
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


router.post('/info/:_id/:field', function (req, res) {
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
// router.post('/info/:_id/:field', function (req, res) {
//     const field = req.params.field;
//     aspirantModel.findByIdAndUpdate(req.params._id, {
//         $push: {
//             [field]: req.body
//         }
//     }, function (error, result) {
//         if (error) return res.status(500).json({ error });
//         return res.json({ result: result });
//     })
// });

module.exports = router
