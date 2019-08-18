var vehicalModel = require("../models/user")
var express = require('express');
var router = express.Router();
router.post('/', function (req, res) {
    vehicalModel.save(req.body,res.callback)
  })
  module.exports = router;
  