const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    alias: String,
    latin: {
        type: String,
        unique: true,
        sparse: true
    },
    light: {
        type: Number,
        min: 0,
        max: 5,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    water: {
        type: Number,
        min: 0,
        max: 4,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    care: String
}, {
    collection: 'plants',
    read: 'nearest'
});

const Plant = module.exports = mongoose.model('Plant', plantSchema);