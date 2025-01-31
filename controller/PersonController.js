const PersonModel = require('../model/PersonModel');

exports.createPerson= async (req, res) => {
    try {
        let singlePerson= new PersonModel({
            name: req.body.name,
            age: req.body.age,
            weight:req.body.weight,
            BMI:req.body.BMI,
            contact_number: req.body.contact_number
        });
        singlePerson = await singlePerson.save();
        res.send(singlePerson);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getAllPerson= async (req, res) => {
    try {
        const allPerson = await PersonModel.find();
        res.send(allPerson);
    } catch (err) {
        res.status(400).send(err);
    }
    //console.log(dietController);
};

exports.getPersonById = async (req, res) => {
    try {
        const PersonById = await PersonModel.findById(req.params.id);
        if (!PersonById) return res.status(404).send('Person not found in database');
        res.send(PersonById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updatePerson = async (req, res) => {
    try {
        const updatedPerson = await PersonModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age,
            weight:req.body.weight,
            BMI:req.body.BMI,
            contact_number: req.body.contact_number
        }, { new: true }); 

        if (!updatedPerson) return res.status(404).send('Person not found in database'); 
        res.send(updatedPerson); 
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Delete a room by ID
exports.deletePerson = async (req, res) => {
    try {
        const PersonById = await PersonModel.findByIdAndDelete(req.params.id); // Find room by ID and delete it
        if (!PersonById) return res.status(404).send('Person not found in database'); // If room is not found, return 404
        res.send("Person deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};
