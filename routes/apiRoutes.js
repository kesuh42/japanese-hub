const express = require("express");
const router = express.Router();
const JishoAPI = require("unofficial-jisho-api");
const cardsControllers = require("../controllers/cards-controllers")
const axios = require("axios");

// Example of JishoAPI Data
// {
//     "slug": "日常",
//     "is_common": true,
//     "tags": [
//         "wanikani17"
//     ],
//     "jlpt": [
//         "jlpt-n3"
//     ],
//     "japanese": [
//         {
//             "word": "日常",
//             "reading": "にちじょう"
//         }
//     ],
//     "senses": [
//         {
//             "english_definitions": [
//                 "everyday",
//                 "daily",
//                 "ordinary",
//                 "usual",
//                 "routine",
//                 "regular"
//             ],
//             "parts_of_speech": [
//                 "Noun which may take the genitive case particle 'no'",
//                 "Noun",
//                 "Adverb (fukushi)"
//             ],
//             "links": [],
//             "tags": [],
//             "restrictions": [],
//             "see_also": [],
//             "antonyms": [],
//             "source": [],
//             "info": []
//         }
//     ],
//     "attribution": {
//         "jmdict": true,
//         "jmnedict": false,
//         "dbpedia": false
//     }
// }

// Jisho Search, fixed after the API changes
router.get("/JishoSearch", (req, res) => {
    axios.get(`https://jisho.org/api/v1/search/words?keyword=${req.query.searchterm}`, { headers: { 'User-Agent': 'YOUR-SERVICE-NAME' }  })
        .then(data =>         
            res.send(
            {
                "word": data.data.data[0].japanese[0].word,
                "part_of_speech": data.data.data[0].senses[0].parts_of_speech,
                "reading": data.data.data[0].japanese[0].reading,
                "definition": data.data.data[0].senses.map(definition => definition.english_definitions)
            }
        ));
});

//Database routes

//A route to retrieve the list of words
router.get("/card", cardsControllers.getCards);

//A route to add a new word to the list
router.post("/card", cardsControllers.createCard);

//A route to update a word in the list

//A route to delete a word from the list
router.delete("/:id", cardsControllers.deleteCard);

module.exports = router;