const mongoose = require("mongoose");

const Card = require("./models/card");

mongoose.connect(
    "mongodb+srv://KevinSuh:MWnDYa9Yghy2mZLQ@japanese-hub.bpoenps.mongodb.net/card_deck?retryWrites=true&w=majority"
).then(() => {
    console.log("Connection with database established")
}).catch(() => {
    console.log("Connection with database failed")
});

const createCard = async(req, res, next) => {
    const createdCard = new Card({
        word : req.body.word,
        parts_of_speech : req.body.parts_of_speech,
        reading : req.body.reading,
        definition : req.body.definition
    });
    const result = await createdCard.save();

    res.json(result);
};

const getCards = async (req, res, next) => {
    const cards = await Card.find();

    res.json(cards);
}

exports.createCard = createCard;
exports.getCards = getCards;