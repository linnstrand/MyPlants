const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectionString = 'mongodb://localhost:27017/plants'

class Database {

    open() {
        mongoose.connect(connectionString, {}, (err) => {
            if (err) {
                console.log('Connection Failed: ' + err);
            }
        });
        mongoose.connection.on('error', err => {
            console.log('Error connecting to MongoDB: ' + err);
        });

        mongoose.connection.once('open', () => {
            console.log('Connection open ');
        })
    }
}


module.exports = new Database();