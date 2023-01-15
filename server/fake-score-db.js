const Score = require('./model/score')

class FakeScoreDb {

  constructor() {
    this.scoreList = {
      name1: 'テスト太郎',
      name2: 'テスト二郎',
      name3: 'テスト三郎',
      name4: 'テスト四郎',
      course: [
        {
          no: 'OUT1',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'OUT2',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'OUT3',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'OUT4',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'OUT5',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'OUT6',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'OUT7',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'OUT8',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'OUT9',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'IN10',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'IN11',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'IN12',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'IN13',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'IN14',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'IN15',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'IN16',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        },
        {
          no: 'IN17',
          score1: 2,
          put1: 1,
          olympic1: 0,
          score2: 3,
          put2: 2,
          olympic2: 0,
          score3: 4,
          put3: 3,
          olympic3: 0,
          score4: 5,
          put4: 4,
          olympic4: 2
        },
        {
          no: 'IN18',
          score1: 5,
          put1: 2,
          olympic1: 4,
          score2: 6,
          put2: 3,
          olympic2: 0,
          score3: 7,
          put3: 4,
          olympic3: 1,
          score4: 8,
          put4: 5,
          olympic4: 2
        }
      ]
    }
  }

  async initDb() {
    await this.cleanDb()
    this.pushScoreToDb()
  }

  async cleanDb() {
    await Score.deleteMany({})
  }

  pushScoreToDb() {
    const list = new Score(this.scoreList)
    list.save()
  }
}

module.exports = FakeScoreDb
