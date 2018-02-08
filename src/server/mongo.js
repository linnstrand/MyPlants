const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectionString = 'mongodb://localhost:27017/plants'

class Database {

    open(callback) {
        mongoose.connect(connectionString, {}, (err) => {
            if (err) {
                console.log('Connection Failed: ' + err);
            }
        });
        mongoose.connection.on('error', err => {
            console.log('Error connecting to MongoDB: ' + err);
            callback(err, false);
        });

        mongoose.connection.once('open', () => {
            console.log('Connection open ');
            callback(null, true);
        })
    }
}


module.exports = new Database();