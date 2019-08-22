var vehicalModel = require("../model/vehicalModel")
var express = require('express');
var router = express.Router();
//******************BY using Callback******************************
router.post('/save', (req, res) => {
  console.log("save ....", req.body)
  vehicalModel.save(req.body, (err, data) => {
    if (err) {
      console.log("err controller", err)
      res.status(500).send(err)
    } else {
      console.log("data controller", data)
      res.status(200).send(data)
    }
  })
})
module.exports = router;