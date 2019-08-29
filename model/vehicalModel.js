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
  },
  //*********************By using async-await***************************
  saveAsyncAwait: (data) => {
    return async function saveFunc() {
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
      console.log("2222")
      await saveFunc;
      console.log("1111")
    }
  }

}