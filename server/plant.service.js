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
        latin: req.body.latin,
        light: req.body.light
    });

    plant.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(plant);
        console.log('plant added successfully');
    });
}

function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
    }
}

function update(req, res) {
    if (req.body._id_id) {
        res.status(500).send(err);
    }
    let p = Plant.findById(req.body._id_id)
        .exec((err, p) => {
            if (err || !p) {
                res.status(500).send(err);
                return;
            }
            p.name = req.body.name;
            p.alias = req.body.alias;
            p.latin = req.body.latin;
            p.light = req.body.light || 0;
            p.water = req.body.water || 0;
            p.care = req.body.care;

            // Save the updated document back to the database
            p.save((err, p) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(p);
            });
        });

}
module.exports = {
    getAll,
    save,
    update
};