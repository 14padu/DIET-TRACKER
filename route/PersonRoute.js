const express = require('express');
const router = express.Router();
const PersonController = require('../controller/PersonController.js'); // Ensure this path is correct

// Define the routes
// router.get ('/test', (req,res)=>{
//     res.status(200).send('test route is working');
// })
router.post('/Person', PersonController.createPerson);
router.get('/Person', PersonController.getAllPerson);
router.get('/Person/:id',PersonController.getPersonById);
router.put('/Person/:id', PersonController.updatePerson);   
router.delete('/Person/:id',PersonController.deletePerson);

module.exports = router;