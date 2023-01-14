const { Schema, default: mongoose } = require("mongoose");

const ScoreSchema = new Schema({
  user1: {
    name: String,
    course: {
      in1 : {
        score: Number,
        put: Number,
        olympic: Number,
        lasvegus: Number
      },
      in2 : {
        score: Number,
        put: Number,
        olympic: Number,
        lasvegus: Number
      }
    }
  },
  user2: {
    name: String,
    course: {
      in1 : {
        score: Number,
        put: Number,
        olympic: Number,
        lasvegus: Number
      },
      in2 : {
        score: Number,
        put: Number,
        olympic: Number,
        lasvegus: Number
      }
    }
  }
})

module.exports = mongoose.model('Product', ScoreSchema)
