const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = 'mongodb://localhost:27017/plants';

module.exports = {
    connectionString
};

function connect() {
    mongoose.connect(env.connectionString, { useMongoClient: true });
}

module.exports = { connect };