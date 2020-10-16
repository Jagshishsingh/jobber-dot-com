const { Double, Decimal128 } = require('mongodb');
const mongoose =require('mongoose');
//import * as bcrypt from 'bcrypt';

const companySchema = mongoose.Schema({
    name: {
        
            type: String,
            required: true
        
        },
    email:{
        type: String,
        required: true,
        unique: true
        
        //   required: [true, 'Please enter Email Address'],
        //   unique: true,
        //   lowercase: true,
        //   dropDups: true

    },
    // password:{
    //     type: String,
    //     required: true

    // },
    location:[
         {
            streetAddress: String,
            city: String,
            state: String,
            country: String
            
          }
       ],
    // contact: {
    //     //valatitor function 
    //     type: Number,
    //     required: true
    // },
    companyUrl:{
        type: String,
        

    },
    // role:[
    //     {
    //        intern : Boolean,
    //        fullTime :Boolean,
    //        required: true
    //     }
    // ],
   skills:
       [
        //    android: Boolean,
        //    Java: Boolean,
        //    webDevlopment: Boolean,
        //    cPP: Boolean,
        //    c:Boolean,
        //    python:Boolean
     String

       ]
,
    // workExperience:{
    //     type: Number,
    //     required :true

    // },
    // isActive:{
    //     type: Boolean,
    //     required: true

    // },
    // cpiRequired:{
    //      type: Number,
    //      required: true
    // }


}
)
const companyModel=mongoose.model('companies',companySchema);
module.exports=companyModel;
