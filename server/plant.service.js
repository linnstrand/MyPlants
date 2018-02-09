const Plant = require('./plant.model');
const database = require('./mongo');

function getAll(req, res) {
    const query = Plant.find({});
    query.exec()
        .then(plants => {
            res.status(200).json(plants);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });

}

function save(req, res) {
    const plant = new Plant({
        id: req.body.id,
        name: req.body.name,
        light: req.body.light
    });

    plant.save(error => {
        if (checkServerError(req, res)) return;
        res.status(201).json(plant);
        console.log('plant added successfully');
    });
}

function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getAll, save
};