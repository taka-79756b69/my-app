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

router.post('/:scoreId', async(req, res)=> {
  const scoreId = req.params.scoreId
  //const scoredata = new score(req.body)
  score.updateOne({_id: scoreId}, {course: [{score1: 1,score2: 2}]}, function(err, foundScore) {
  //scoredata.save(function(err, foundScore) {
    if (err || !foundScore) {
      return res.status(422).send({errors: [{title: 'Score Error', detail: 'Score Not Found'}]})
    }
    return res.json(foundScore)
  })
})

module.exports = router
