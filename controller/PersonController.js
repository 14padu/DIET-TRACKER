const PersonModel = require('../model/PersonModel');

// Create a Person
exports.createPerson = async (req, res) => {
    console.log("🔵 Incoming Request:", req.body);

    try {
        const { name, age, weight, BMI, contact_number } = req.body;

        if (!name || !age || !weight || !BMI || !contact_number) {
            return res.status(400).json({ message: "❌ All fields are required" });
        }

        let singlePerson = new PersonModel({ name, age, weight, BMI, contact_number });
        singlePerson = await singlePerson.save();

        console.log("✅ Person Created:", singlePerson);
        res.status(201).json(singlePerson);
    } catch (err) {
        console.error("❌ Error:", err.message);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// Get All Persons
exports.getAllPerson = async (req, res) => {
    try {
        const allPersons = await PersonModel.find();
        res.json(allPersons);
    } catch (err) {
        res.status(500).json({ message: "❌ Error fetching persons", error: err.message });
    }
};

// Get Person by ID
exports.getPersonById = async (req, res) => {
    try {
        const person = await PersonModel.findById(req.params.id);
        if (!person) return res.status(404).json({ message: "❌ Person not found" });

        res.json(person);
    } catch (err) {
        res.status(500).json({ message: "❌ Error retrieving person", error: err.message });
    }
};

// Update a Person
exports.updatePerson = async (req, res) => {
    try {
        const updatedPerson = await PersonModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedPerson) return res.status(404).json({ message: "❌ Person not found" });

        res.json(updatedPerson);
    } catch (err) {
        res.status(500).json({ message: "❌ Error updating person", error: err.message });
    }
};

// Delete a Person
exports.deletePerson = async (req, res) => {
    try {
        const person = await PersonModel.findByIdAndDelete(req.params.id);
        if (!person) return res.status(404).json({ message: "❌ Person not found" });

        res.json({ message: "✅ Person deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "❌ Error deleting person", error: err.message });
    }
};
