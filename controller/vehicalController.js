var vehicalModel = require("../model/vehicalModel")
var express = require('express');
var router = express.Router();
//******************BY using Callback******************************
router.post('/saveCallback', (req, res) => {
  vehicalModel.saveCallback(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})
//********************By using Promise ******************************
router.post('/savePromise', (req, res) => {
  vehicalModel.savePromise(req.body).then((data) => {
    res.status(200).send(data)
  }).catch((data) => {
    res.status(500).send(data)
  })
})
//*********************By using async-await***************************
router.post('/saveAsyncAwait', (req, res) => {
  vehicalModel.saveAsyncAwait(req.body).then((data) => {
    res.status(200).send(data)
  }).catch((data) => {
    res.status(500).send(data)
  })
})
module.exports = router;