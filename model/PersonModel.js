const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    BMI: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    //    admit_Date:{
        //     type: Date,
        //     required:true
        //    },
    //    availability:{
    //     type:Boolean,
    //     required:true
    //    }

});

const PersonModel = mongoose.model('Person', PersonSchema);
module.exports = PersonModel; // Corrected here