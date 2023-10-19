const Card = require('../models/card');

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