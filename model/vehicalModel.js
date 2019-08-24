var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  //******************BY using Callback******************************
  saveCallback: (data, callback) => {
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
  },
  //********************By using Promise ******************************
  savePromise: (data) => {
    return new Promise((resolve, reject) => {
      var vehicalSave = new vehical(data)
      vehicalSave.save((err, data) => {
        if (err) {
          console.log("err", err)
          reject(err)
        } else {
          console.log("data save")
          resolve(data)
        }
      })
    })
  }
}