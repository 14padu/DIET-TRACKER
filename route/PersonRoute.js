const express = require('express');
const router = express.Router();
const PersonController = require('../controller/PersonController.js'); // Ensure this path is correct

// Define the routes
// router.get ('/test', (req,res)=>{
//     res.status(200).send('test route is working');
// })
router.post('/Person', dietController.createPerson);
router.get('/Person', dietController.getAllPerson);
router.get('/Person/:id', dietController.getPersonById);
router.put('/Person/:id', dietController.updatePerson);   
router.delete('/Person/:id', dietController.deletePerson);

module.exports = router;