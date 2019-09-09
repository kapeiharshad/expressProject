const express = require("express");
const app = express();
const env = require("./config/env")();
const bodyParser = require("body-parser");
const glob = require("glob");
let mongoose = require("mongoose");
mongoose.connect(
    env.mongoUrl + "expressProject", {
        useNewUrlParser: true
    },
    () => {
        console.log("Mongodb Connected");
    }
);
let conn = mongoose.connection;
app.use(bodyParser.json());

glob("./controller/*.js", function (err, files) {
    for (var i = 0; i <= files.length - 1; i++) {
        var controller = require(`${files[i]}`);
        var str1 = files[i].split("/");
        var str2 = str1[2].split("Controller.js");
        app.use(`/${str2[0]}`, controller);
    }
});
app.listen(env.port, () =>
    console.log(`Example app listening on port ${env.port}!`)
);