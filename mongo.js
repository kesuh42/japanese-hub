const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://KevinSuh:MWnDYa9Yghy2mZLQ@japanese-hub.bpoenps.mongodb.net/card_deck?retryWrites=true&w=majority";

const createCard = async (req, res, next) => {
    const newCard = {
        word : req.body.word,
        parts_of_speech : req.body.parts_of_speech,
        reading : req.body.reading,
        definition : req.body.definition
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection("cards").insertOne(newCard);
    } catch (error) {
        return res.json({message: "Card upload failed"});
    };
    setTimeout(() => {client.close()}, 1500);

    res.json(newCard);
};

const getCards = async (req, res, next) => {
    const client = new MongoClient(url);

    let cards;

    try {
        await client.connect();
        const db = client.db();
        cards = await db.collection("cards").find().toArray();
    } catch (error) {
        return res.json({message: "Card retrieval failed"});
    }
    setTimeout(() => {client.close()}, 1500);

    res.json(cards);
};;

exports.createCard = createCard;
exports.getCards = getCards;