const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = require('./env/config');

//const mongoUri = `mongodb://${env.dbName};${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;

function connect() {
    mongoose.connect(env.connectionString, { useMongoClient: true });
}

module.exports = { connect };