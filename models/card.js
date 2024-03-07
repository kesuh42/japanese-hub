const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    word: {type: String, required: false},
    parts_of_speech: {type: [String], required: true},
    reading: {type: String, required: true},
    definition: {type: [[String]], required: true}
});

module.exports = mongoose.model("Card", cardSchema);