const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema(
    {
        name: String,
        light: String,
        water: String,
        care: String
    },
    {
        collection: 'plants',
        read: 'nearest'
    });

const Plant = module.exports = mongoose.model('Plant', plantSchema);