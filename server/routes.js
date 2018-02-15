const express = require('express');
const router = express.Router();

const plantService = require('./plant.service');

router.get('/plants', (req, res) => {
    plantService.getAll(req, res);
});

router.post('/plants', (req, res) => {
    plantService.save(req, res);
});

router.put('/plants', (req, res) => {
    plantService.update(req, res);
});

module.exports = router;