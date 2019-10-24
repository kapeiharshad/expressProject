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
      vehical.findOne({
        name: data.name
      }).then((findOnedata) => {
        if (findOnedata) {
          reject("Member already present")
        } else {
          var vehicalData = new vehical(data)
          resolve(vehicalData.save())
        }
      }).catch((data) => {
        reject(data)
      })

    })
  },
  //*********************By using async-await***************************
  saveAsyncAwait: async (data) => {
    console.log("from async model")
    try {
      let findOnedata = await vehical.findOne({
        name: data.name
      })
      if (findOnedata) {
        return "Member already present"
      } else {
        console.log("2")
        let vehicalData = new vehical(data)
        let vehical = await vehicalData.save()
        console.log("12", vehical)
        return vehical
      }
    } catch (err) {
      throw err;
    }

  }

}