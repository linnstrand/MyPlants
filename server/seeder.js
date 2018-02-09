const moongose = require('mongoose');
const Plant = require('./plant.model');

class DBSeeder {
    constructor() {
        this.plants = [
            new Plant({
                name: 'Monstera',
                light: 'Bright but no direct sunlight',
                water: 'Between watering times allow the soil to become dry to the touch within the top couple of inches or so of soil.',
                care: 'Mist leaves with water'
            }),
            new Plant({
                name: 'African Violet',
                light: 'Bright light, but might burn',
                water: 'Water when top soil is dry',
                care: 'high humidity and plenty of gentle misting (with luke warm water, not in direct sunlight and only the leaves).'
            }),
            new Plant({
                name: 'Boston Fern',
                light: 'Avoid direct sunlight',
                water: 'Keep soil moist, but not soggy',
                care: 'Prefers high humidity'
            }),
            new Plant({
                name: 'Fiddle Leaf Fig',
                light: 'Bright spot, but avoid afternoon sun',
                water: 'Water when top soil is dry, overwatering is worse then underwatering.',
                care: 'Too low humidity levels with cause brown leaves.'
            }),
        ]

    }
    init() {
        moongose.connection.db.listCollections({ name: 'plants' })
            .next((err, result) => {
                if (err) console.log('Database error ' + err);
                if (!result) {
                    console.log('Starting seeding.');
                    this.seed();
                }
            })
    }

    seed() {
        this.plants.forEach(p => {
            p.save((err, plant) => {
                if (err) {
                    console.log('Seeding error: ' + err);
                } else {
                    console.log(`Saved plant ${plant.name}`);
                }
            });
        });
    }

}

module.exports = new DBSeeder();