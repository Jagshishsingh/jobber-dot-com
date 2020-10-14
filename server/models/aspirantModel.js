const mongoose = require('mongoose');

const aspirantSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // dob: {
    //     type: Date,
    //     required: true
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
    academics: [
        {
            startDate: Date,
            endDate: Date,
            grade: String,
            // instituteName: String,
            // degree: String,
            // fieldOfStudy: String,
            // achievementLink: String,
            // affiliation: String
        }
    ],
    workExperience:[
        {
            startDate:Date,
            endDate:Date,
            jobTitle:String,
            // currentlyWorking:Boolean,
            // Company:String,
            // Role:String,
            // achievementLink:String,
        }
    ],
    projects:[
        {
            startDate:Date,
            endDate:Date,
            // projectTitle:String,
            // Description:String,
            // technologyUsed:[String],
            // VCSLinks:[String],
        }
    ],
    achievements:[
        {
            dateOfIssue:Date,
            issuingAuthority:String,
            // competitionName:String,
            // rank:String,
            // result:{
            //     type:String,
            //     default:null
            // }
        }
    ],
    skills:[
        {
            skill:String,
            selfRating:{
                type:Number,
                min:0,
                max:10
            }
        }
    ]
})

const aspirantModel = mongoose.model('aspirants', aspirantSchema);
module.exports = aspirantModel;