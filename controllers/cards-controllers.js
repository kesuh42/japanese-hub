const Card = require('../models/card');

const createCard = async(req, res, next) => {
    const createdCard = new Card({
        word : req.body.word,
        parts_of_speech : req.body.parts_of_speech,
        reading : req.body.reading,
        definition : req.body.definition
    });
    const result = await createdCard.save();

    res.status(201).json(result);
};

const getCards = async (req, res, next) => {
    const cards = await Card.find();

    res.json(cards);
};

const deleteCard = async (req, res, next) => {
    const cardId = req.params.id;
    const card = await Card.findById(cardId)
    await card.deleteOne();

    res.status(200).json({ message: 'Deleted place.' });
  };

exports.createCard = createCard;
exports.getCards = getCards;
exports.deleteCard = deleteCard;