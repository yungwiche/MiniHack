const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
        _id: {type: Number, required: true},
        question: {type: String, required: true},
        1: {type: Number, default: 0},
        2: {type: Number, default: 0},
        3: {type: Number, default: 0},
        4: {type: Number, default: 0},
        5: {type: Number, default: 0},
        6: {type: Number, default: 0},
        7: {type: Number, default: 0},
        8: {type: Number, default: 0},
        9: {type: Number, default: 0},
        10: {type: Number, default: 0},
        11: {type: Number, default: 0},
        12: {type: Number, default: 0},
        13: {type: Number, default: 0},
        14: {type: Number, default: 0},
        15: {type: Number, default: 0},
    }
);

module.exports = mongoose.model('questions', questionSchema);
