const moongose = require('mongoose');
const Plant = require('./plant.model');

class DBSeeder {
    constructor() {
        this.plants = [
            new Plant({
                name: 'Monstera',
                light: 4,
                water: 3,
                care: 'Placera ljus men inte i direkt solljus.Låt översta lagret jord torka mellan vattningarna. Fukta gärna bladen med blomspruta'
            }),
            new Plant({
                name: 'Saintpaula',
                light: 4,
                water: 3,
                care: 'Saintpaulian ska vattnas så att den blir ordentligt genomvattnad. Därefter är det viktigt att jorden får torka ut innan växten får nytt vatten, detta är speciellt viktigt vintertid. Om blomman vattnas underifrån ska vatten som blir kvar på fatet efter 10 minuter hällas av. Saintpaulian klarar ett visst mått av torka tack vare sina saftiga och tjocka blad. Saintpaulians rötter är känsliga och därför är det viktigt att endast vattna med rumstempererat vatten och inte låta saintpaulian stå i kalla och dragiga fönster.'
            }),
            new Plant({
                name: 'Spjutbräken',
                alias: 'Ormbunke',
                light: 2,
                water: 4,
                care: 'Håll jorden jämt fuktig.'
            }),
            new Plant({
                name: 'Fiolfikus',
                light: 4,
                water: 3,
                care: 'Placeras ljust, men undvik eftermiddagssolen. Vattna när översta lagret jord är torrt, övervattning är värre än undervatten. För låga fuktighetsnivåer kan orsaka bruna löv.'
            }),
        ]

    }
    init() {
        moongose.connection.db.listCollections({
                name: 'plants'
            })
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