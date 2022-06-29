const express = require("express");
const router = express.Router();
const JishoAPI = require("unofficial-jisho-api");

//Jisho Search
router.get("/JishoSearch", (req, res) => {
    const jisho = new JishoAPI();
    jisho.searchForPhrase(req.query.searchterm).then(result => {
        res.send(result.data[0]);
    });
});

//Database routes

//A route to retrieve the list of words

//A route to add a new word to the list

//A route to update a word in the list

//A route to delete a word from the list

module.exports = router;