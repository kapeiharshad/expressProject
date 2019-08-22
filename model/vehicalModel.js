var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  save: (data, callback) => {
    var vehicalSave = new vehical(data)
    vehicalSave.save((err, data) => {
      if (err) {
        console.log("err", err)
        callback(err, null)
      } else {
        console.log("data save")
        callback(null, data)
      }
    })
  }
}