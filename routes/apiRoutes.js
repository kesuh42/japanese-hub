const express = require("express");
const router = express.Router();

//Dummy test route to see if server is working
router.get("/test", (req, res) =>{
    console.log("test route")
    res.send("Test route works!")
});

//A route to retrieve the list of words

//A route to add a new word to the list

//A route to update a word in the list

//A route to delete a word from the list

module.exports = router;