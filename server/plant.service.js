const Plant = require('./plant.model');
const database = require('./mongo');

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
    const plant = new Plant({
        name: req.body.name,
        alias: req.body.alias,
        latin: req.body.latin,
        light: req.body.light,
        light: req.body.water,
        care: req.body.care
    });

    plant.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(plant);
        console.log('plant added successfully');
    });
}

function putPlant(req, res) {
    Plant.findOne({ _id: req.body._id }, (err, plant) => {
        if (checkServerError(res, err) || !checkFound(res, plant)) return;
        plant.name = req.body.name;
        plant.alias = req.body.alias;
        plant.latin = req.body.latin;
        plant.light = req.body.light || 0;
        plant.water = req.body.water || 0;
        plant.care = req.body.care;

        // Save the updated document back to the database
        plant.save((err) => {
            if (checkServerError(res, err)) return;
            res.status(200).json(plant);
            console.log('Plant updated successfully');
        });
    });

}

function deletePlant(req, res) {
    const id = req.params.id;
    Plant.findOneAndRemove({ _id: id })
        .then(plant => {
            if (!checkFound(res, plant)) {
                res.status(200).json(plant);
                console.log('Plant deleted successfully');
            }
        })
        .catch(err => {
            if (checkServerError(res, err)) return;
        });
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        console.log('Error: ' + error.message);
        return error;
    }
}

function checkFound(res, plant) {
    if (!plant) {
        res.status(404).send('Plant not found');
        return;
    }
    return plant;
}

module.exports = {
    getPlants,
    postPlant,
    putPlant,
    deletePlant
};