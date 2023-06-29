const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");

const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static("client/build"));

//DATABASE CODE HERE!!

//Import the API routes from the routes folder
app.use(routes)

//Send every other request to React 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(5000, () => {
    console.log("Server is up on port 5000!");
});