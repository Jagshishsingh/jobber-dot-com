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
            instituteName: String,
            // degree: String,
            // fieldOfStudy: String,
            // achievementLink: String,
            // affiliation: String
        }
    ]
})

const aspirantModel = mongoose.model('aspirants', aspirantSchema);
module.exports = aspirantModel;