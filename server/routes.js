const express = require('express');
const router = express.Router();

const plantService = require('./plant.service');

router.get('/plants', (req, res) => {
    plantService.getPlants(req, res);
});

router.post('/plants', (req, res) => {
    plantService.postPlant(req, res);
});

router.delete('/plants/:id', (req, res) => {
    plantService.deletePlant(req, res);
});

router.put('/plants', (req, res) => {
    plantService.putPlant(req, res);
});

module.exports = router;