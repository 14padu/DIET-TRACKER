const express = require('express');
const router = express.Router();
const PersonController = require('../controller/PersonController.js'); // Ensure this path is correct

// Define the routes
// router.get ('/test', (req,res)=>{
//     res.status(200).send('test route is working');
// })
router.post('/persons', PersonController.createPerson);
router.get('/persons', PersonController.getAllPerson);
router.get('/persons/:id',PersonController.getPersonById);
router.put('/persons/:id', PersonController.updatePerson);   
router.delete('/persons/:id',PersonController.deletePerson);

module.exports = router;