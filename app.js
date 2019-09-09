const express = require("express");
const app = express();
const config = require("./config")();
const bodyParser = require("body-parser");
const glob = require("glob");
// const port = 3000;
let mongoose = require("mongoose");
mongoose.connect(
    config.mongoUrl + "expressProject", {
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
console.log("config:::::", config.mongoUrl);
// console.log("NODE_ENV::::::", process.env.NODE_ENV)
app.listen(config.port, () =>
    console.log(`Example app listening on port ${config.port}!`)
);