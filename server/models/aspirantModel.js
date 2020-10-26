const mongoose = require('mongoose');

const aspirantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
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
            // endDate: Date,
            grade: String,
            // instituteName: String,
            // degree: String,
            // fieldOfStudy: String,
            // achievementLink: String,
            // affiliation: String
        }
    ],
    workExperience: [
        {
            startDate: Date,
            // endDate:Date,
            jobTitle: String,
            // currentlyWorking:Boolean,
            company: String,
            // Role:String,
            // achievementLink:String,
        }
    ],
    projects: [
        {
            startDate: Date,
            // endDate:Date,
            projectTitle: String,
            // Description:String,
            // technologyUsed:[String],
            // VCSLinks:[String],
        }
    ],
    achievements: [
        {
            dateOfIssue: Date,
            issuingAuthority: String,
            // competitionName:String,
            // rank:String,
            // result:{
            //     type:String,
            //     default:null
            // }
        }
    ],
    skills: [
        {
            skill: String,
            selfRating: {
                type: Number,
                min: 0,
                max: 10
            }
        }
    ]
})

const aspirantModel = mongoose.model('aspirants', aspirantSchema);
module.exports = aspirantModel;