var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  save: (data, callback) => {
  var  vehicalSave =new Schema (data)
  vehical.save(vehicalSave)
}
}
