const express = require("express");
const router = express.Router();
const JishoAPI = require("unofficial-jisho-api");

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

//Jisho Search
router.get("/JishoSearch", (req, res) => {
    const jisho = new JishoAPI();
    jisho.searchForPhrase(req.query.searchterm).then(result => {
        const targetWord = result.data[0];
        res.send(
            {
                "word": targetWord.japanese[0].word,
                "part_of_speech": targetWord.senses[0].parts_of_speech,
                "reading": targetWord.japanese[0].reading,
                "definition": targetWord.senses.map(definition => definition.english_definitions)
            }
        );
    });
});

//Database routes

//A route to retrieve the list of words

//A route to add a new word to the list

//A route to update a word in the list

//A route to delete a word from the list

module.exports = router;