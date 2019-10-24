var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var vehicalSchema = new Schema({
  name: String,
  company: {
    type: String,
    required: true
  }
  // colour: String,
  // comments: [{ body: String, date: Date }],
  // manufacturedDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model("vehical", vehicalSchema);