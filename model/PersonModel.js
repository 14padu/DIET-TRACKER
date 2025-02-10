const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    BMI: { type: Number, required: true },
    contact_number: { type: String, required: true }
});

module.exports = mongoose.model('Person', PersonSchema);
