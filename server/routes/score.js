const express = require('express')
const score = require('../model/score')
const router = express.Router()

router.get('', function(req, res) {
  score.find({}, function(err, foundScore) {
    return res.json(foundScore)
  })
})

router.get('/:productId', function(req, res) {
  const productId = req.params.productId
  score.findById(productId, function(err, foundProduct) {
    if (err || !foundProduct) {
      return res.status(422).send({errors: [{title: 'Product Error', detail: 'Product Not Found'}]})
    }
    return res.json(foundProduct)
  })
})

module.exports = router
