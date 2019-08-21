const express = require("express");
const app = express();
var bodyParser = require('body-parser')

const port = 3000;
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressProject', {
    useNewUrlParser: true
});
let conn = mongoose.connection;
app.use(bodyParser.json())
var controller = require('./controller/vehicalController');
app.use("/", controller);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));