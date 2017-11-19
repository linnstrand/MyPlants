const Plant = require('./plant.model');

require('./mongo').connect();

function getPlants(req, res) {
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

function postPlant(req, res) {
    const originalPlant = { id: req.body.id, name: req.body.name, light: req.body.light };
    const plant = new Plant(originalPlant);

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
    getPlants, postPlant
};