const mongoose= require('mongoose');
const router =require('express').Router();
const companyModel=require('../models/companyModel');
const expressValidator=require('express-validator');
const expressSession=require('express-session');

router.get('/',function(req,res){
    res.render('index',{ title:'Form Validation',success: false, error: req.session.errors});
    res.session.error=null;

});

router.post('/addUser',function(req,res){
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
   
    const temp=new companyModel(req.body);
    temp.save(function(err,result){
        if(err){
            return res.status(500).json({
                message: 'Error in sending data...',
                error :err
            });


        }
        return res.json({result: result});
    })
});
router.post('/info/:_id/:field',function(req,res){
    const field=  req.params.field;
    companyModel.findByIdAndUpdate(req.params._id,{
        $push: {
            [field]: req.body
        }
    },function(error,result){
        if(error)return res.status(500).json({error});
        return res.json({result:result});

    })

});
module.exports = router;

