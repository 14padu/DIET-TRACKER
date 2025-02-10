const express = require('express');
const router = express.Router();
const PersonController = require('../controller/PersonController'); // Ensure path is correct

// API Routes
router.post('/', PersonController.createPerson);
router.get('/', PersonController.getAllPerson);
router.get('/:id', PersonController.getPersonById);
router.put('/:id', PersonController.updatePerson);
router.delete('/:id', PersonController.deletePerson);

module.exports = router;
