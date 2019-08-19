var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  save: (data, callback) => {
    var vehicalSave = new vehical(data)
    vehicalSave.save(callback)
  }
}