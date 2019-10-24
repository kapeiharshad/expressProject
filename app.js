const express = require("express");
const app = express();
const env = require("./config/env")();
const bodyParser = require("body-parser");
const fs = require('fs');
const mongoose = require("mongoose");
mongoose.connect(
    env.mongoUrl + "expressProject", {
        useNewUrlParser: true
    },
    () => {
        console.log("Mongodb Connected");
    }
);
app.use(bodyParser.json());

const controllerfiles = fs.readdirSync('./controller/');
for (var i = 0; i <= controllerfiles.length - 1; i++) {
    var controller = require(`./controller/${controllerfiles[i]}`);
    var str1 = controllerfiles[i].split("Controller.js");
    app.use(`/${str1[0]}`, controller);
}
app.listen(env.port, () =>
    console.log(`Example app listening on port ${env.port}! \n Notice:- Name of controller file should be (xxxController.js)`)
);