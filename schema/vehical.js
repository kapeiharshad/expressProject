var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var vehicalSchema = new Schema({
  name: String,
  company: String,
  colour: String,
  comments: [{ body: String, date: Date }],
  manufacturedDate: { type: Date, default: Date.now }
});
var vehical = mongoose.model("vehical", vehicalSchema);
