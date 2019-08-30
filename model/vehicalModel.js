var mongoose = require("mongoose");
var vehical = require("../schema/vehical.js");
module.exports = {
  //******************BY using Callback******************************
  saveCallback: (data, callback) => {
    var vehicalSave = new vehical(data)
    vehicalSave.save((err, data) => {
      if (err) {
        callback(err, null)
      } else {
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
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  },
  //*********************By using async-await***************************
  saveAsyncAwait: async (data) => {
    console.log("111")
    var vehicalSave = await new vehical(data)
    console.log("2222")
    return vehicalSave.save()
  }

}