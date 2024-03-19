const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");

const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'https://japanese-hub-c8801.web.app'
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static("client/build"));

//DATABASE CODE HERE!!
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@japanese-hub.bpoenps.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
).then(() => {
    console.log("Connection with database established")
}).catch(() => {
    console.log("Connection with database failed")
});

//Import the API routes from the routes folder
app.use(routes)

//Send every other request to React 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is up on port 5000!");
});