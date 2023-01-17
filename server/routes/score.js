const express = require('express')
const score = require('../model/score')
const router = express.Router()

router.get('', function(req, res) {
  score.find({}, function(err, foundScore) {
    return res.json(foundScore)
  })
})

router.get('/:scoreId', function(req, res) {
  const scoreId = req.params.scoreId
  score.findById(scoreId, function(err, foundScore) {
    if (err || !foundScore) {
      return res.status(422).send({errors: [{title: 'Score Error', detail: 'Score Not Found'}]})
    }
    return res.json(foundScore)
  })
})

router.post('/:scoreId', function(req, res) {
  const username = req.body.name1
  const scoreId = req.params.scoreId
  // const reqJson = JSON.stringify(req.body)
  score.updateOne({
    _id: scoreId
  }, {
    course1_score1: req.body.course1_score1,
    course1_olympic1: req.body.course1_olympic1
  }, function(err, foundScore) {
    //scoredata.save(function(err, foundScore) {
    if (err || !foundScore) {
      return res.status(422).send({errors: [{title: 'Score Error', detail: 'Score Not Found'}]})
    }
    return res.json(username)
  })
})

module.exports = router
