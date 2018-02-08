const express = require('express');
const router = express.Router();

const plantService = require('./plant.service');

router.get('/plants', (req, res) => {
    // res.send(200, [{ 'id': 1, 'name': 'Monstera', 'light': 'Medium' }]);
    plantService.getAll(req, res);
});

router.get('/', (req, res) => {
    // res.send(200, [{ 'id': 1, 'name': 'Monstera', 'light': 'Medium' }]);
    res.send("hello world");
});

router.post('/plant', (req, res) => {
    plantService.save(req, res);
});

module.exports = router;



