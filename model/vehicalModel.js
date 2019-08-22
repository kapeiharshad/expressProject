var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  save: (data, harshadCallback) => {
    var vehicalSave = new vehical(data)
    vehicalSave.save((err, data) => {
      if (err) {
        console.log("err", err)
        harshadCallback(err, null)
      } else {
        console.log("data save")
        harshadCallback(null, data)
      }
    })
  }
}