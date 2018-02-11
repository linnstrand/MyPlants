const moongose = require('mongoose');
const Plant = require('./plant.model');

class DBSeeder {
    constructor() {
        this.plants = [
            new Plant({
                name: 'Monstera',
                light: 4,
                water: 3,
                care: 'Place bright but no direct sunlight. Between watering times allow the soil to become dry to the touch within the top couple of inches or so of soil. Mist leaves with water'
            }),
            new Plant({
                name: 'African Violet',
                light: 4,
                water: 3,
                care: 'Bright light, but might burn. Water when top soil is dry, high humidity and plenty of gentle misting (with luke warm water, not in direct sunlight and only the leaves).'
            }),
            new Plant({
                name: 'Boston Fern',
                light: 2,
                water: 4,
                care: 'Avoid direct sunlight. Keep soil moist, but not soggy, Prefers high humidity'
            }),
            new Plant({
                name: 'Fiddle Leaf Fig',
                light: 4,
                water: 3,
                care: 'Bright spot, but avoid afternoon sun. Water when top soil is dry, overwatering is worse then underwatering. Too low humidity levels with cause brown leaves.'
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