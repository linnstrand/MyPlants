const express = require('express');
const router = express.Router();

const plantService = require('./plant.service');

router.get('/plants', (req, res) => {
    // res.send(200, [{ 'id': 1, 'name': 'Monstera', 'light': 'Medium' }]);
    plantService.getPlants(req, res);
});

router.post('/plant', (req, res) => {
    plantService.postPlant(req, res);
});

module.exports = router;



