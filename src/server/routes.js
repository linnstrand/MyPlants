const express = require('express');
const router = express.Router();

router.get('/plants', (req, res) => {
    res.send(200, [{ 'id': 1, 'name': 'Monstera', 'light': 'Medium' }]);
});

module.exports = router;



