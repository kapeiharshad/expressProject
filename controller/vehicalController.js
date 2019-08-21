var vehicalModel = require("../model/vehicalModel")
var express = require('express');
var router = express.Router();
router.post('/save', function (req, res) {
  console.log("save ....", req.body)
  vehicalModel.save(req.body, res.callback)
})
module.exports = router;