const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
        _ip: {type: String, required: true},
        1: {type: Number, default: null},
        2: {type: Number, default: null},
        3: {type: Number, default: null},
        4: {type: Number, default: null},
        5: {type: Number, default: null},
        6: {type: Number, default: null},
        score: {type: Number, default: 0},
        currentQuestionNo : {type: Number, default: 1},
        won: {type: Number, default: 0}
    }
);

module.exports = mongoose.model('players', playerSchema);
