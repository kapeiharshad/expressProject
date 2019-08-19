const express = require("express");
const app = express();
const port = 3000;
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressProject', {
    useNewUrlParser: true
});
let conn = mongoose.connection;
var controller = require('./controller/vehicalController');
app.use("/", controller);
// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));