const Score = require('./model/score')

class FakeScoreDb {

  constructor() {
    this.scoreList = {
      name1: 'テスト一郎',
      name2: 'テスト二郎',
      name3: 'テスト三郎',
      name4: 'テスト四郎',

      course1_no: 'OUT1',
      course1_score1: 5,
      course1_put1: 2,
      course1_olympic1: 5,
      course1_lasvegas1: 1,
      course1_score2: 6,
      course1_put2: 3,
      course1_olympic2: 3,
      course1_lasvegas2: 0,
      course1_score3: 7,
      course1_put3: 3,
      course1_olympic3: 4,
      course1_lasvegas3: 0,
      course1_score4: 8,
      course1_put4: 4,
      course1_olympic4: 1,
      course1_lasvegas4: 0,

      course2_no: 'OUT2',
      course2_score1: 5,
      course2_put1: 2,
      course2_olympic1: 0,
      course2_lasvegas1: 0,
      course2_score2: 6,
      course2_put2: 3,
      course2_olympic2: 3,
      course2_lasvegas2: 0,
      course2_score3: 7,
      course2_put3: 3,
      course2_olympic3: 4,
      course2_lasvegas3: 0,
      course2_score4: 8,
      course2_put4: 4,
      course2_olympic4: 1,
      course2_lasvegas4: 0,

      course3_no: 'OUT3',
      course3_score1: 5,
      course3_put1: 2,
      course3_olympic1: 0,
      course3_lasvegas1: 0,
      course3_score2: 6,
      course3_put2: 3,
      course3_olympic2: 3,
      course3_lasvegas2: 0,
      course3_score3: 7,
      course3_put3: 3,
      course3_olympic3: 4,
      course3_lasvegas3: 0,
      course3_score4: 8,
      course3_put4: 4,
      course3_olympic4: 1,
      course3_lasvegas4: 0,

      course4_no: 'OUT4',
      course4_score1: 5,
      course4_put1: 2,
      course4_olympic1: 0,
      course4_lasvegas1: 0,
      course4_score2: 6,
      course4_put2: 3,
      course4_olympic2: 3,
      course4_lasvegas2: 0,
      course4_score3: 7,
      course4_put3: 3,
      course4_olympic3: 4,
      course4_lasvegas3: 0,
      course4_score4: 8,
      course4_put4: 4,
      course4_olympic4: 1,
      course4_lasvegas4: 0,

      course5_no: 'OUT5',
      course5_score1: 5,
      course5_put1: 2,
      course5_olympic1: 0,
      course5_lasvegas1: 0,
      course5_score2: 6,
      course5_put2: 3,
      course5_olympic2: 3,
      course5_lasvegas2: 0,
      course5_score3: 7,
      course5_put3: 3,
      course5_olympic3: 4,
      course5_lasvegas3: 0,
      course5_score4: 8,
      course5_put4: 4,
      course5_olympic4: 1,
      course5_lasvegas4: 0,

      course6_no: 'OUT6',
      course6_score1: 5,
      course6_put1: 2,
      course6_olympic1: 0,
      course6_lasvegas1: 0,
      course6_score2: 6,
      course6_put2: 3,
      course6_olympic2: 3,
      course6_lasvegas2: 0,
      course6_score3: 7,
      course6_put3: 3,
      course6_olympic3: 4,
      course6_lasvegas3: 0,
      course6_score4: 8,
      course6_put4: 4,
      course6_olympic4: 1,
      course6_lasvegas4: 0,

      course7_no: 'OUT7',
      course7_score1: 5,
      course7_put1: 2,
      course7_olympic1: 0,
      course7_lasvegas1: 0,
      course7_score2: 6,
      course7_put2: 3,
      course7_olympic2: 3,
      course7_lasvegas2: 0,
      course7_score3: 7,
      course7_put3: 3,
      course7_olympic3: 4,
      course7_lasvegas3: 0,
      course7_score4: 8,
      course7_put4: 4,
      course7_olympic4: 1,
      course7_lasvegas4: 0,

      course8_no: 'OUT8',
      course8_score1: 5,
      course8_put1: 2,
      course8_olympic1: 0,
      course8_lasvegas1: 0,
      course8_score2: 6,
      course8_put2: 3,
      course8_olympic2: 3,
      course8_lasvegas2: 0,
      course8_score3: 7,
      course8_put3: 3,
      course8_olympic3: 4,
      course8_lasvegas3: 0,
      course8_score4: 8,
      course8_put4: 4,
      course8_olympic4: 1,
      course8_lasvegas4: 0,

      course9_no: 'OUT9',
      course9_score1: 5,
      course9_put1: 2,
      course9_olympic1: 0,
      course9_lasvegas1: 0,
      course9_score2: 6,
      course9_put2: 3,
      course9_olympic2: 3,
      course9_lasvegas2: 0,
      course9_score3: 7,
      course9_put3: 3,
      course9_olympic3: 4,
      course9_lasvegas3: 0,
      course9_score4: 8,
      course9_put4: 4,
      course9_olympic4: 1,
      course9_lasvegas4: 0,

      course10_no: 'IN1',
      course10_score1: 5,
      course10_put1: 2,
      course10_olympic1: 0,
      course10_lasvegas1: 0,
      course10_score2: 6,
      course10_put2: 3,
      course10_olympic2: 3,
      course10_lasvegas2: 0,
      course10_score3: 7,
      course10_put3: 3,
      course10_olympic3: 4,
      course10_lasvegas3: 0,
      course10_score4: 8,
      course10_put4: 4,
      course10_olympic4: 1,
      course10_lasvegas4: 0,

      course11_no: 'IN2',
      course11_score1: 5,
      course11_put1: 2,
      course11_olympic1: 0,
      course11_lasvegas1: 0,
      course11_score2: 6,
      course11_put2: 3,
      course11_olympic2: 3,
      course11_lasvegas2: 0,
      course11_score3: 7,
      course11_put3: 3,
      course11_olympic3: 4,
      course11_lasvegas3: 0,
      course11_score4: 8,
      course11_put4: 4,
      course11_olympic4: 1,
      course11_lasvegas4: 0,

      course12_no: 'IN3',
      course12_score1: 5,
      course12_put1: 2,
      course12_olympic1: 0,
      course12_lasvegas1: 0,
      course12_score2: 6,
      course12_put2: 3,
      course12_olympic2: 3,
      course12_lasvegas2: 0,
      course12_score3: 7,
      course12_put3: 3,
      course12_olympic3: 4,
      course12_lasvegas3: 0,
      course12_score4: 8,
      course12_put4: 4,
      course12_olympic4: 1,
      course12_lasvegas4: 0,

      course13_no: 'IN4',
      course13_score1: 5,
      course13_put1: 2,
      course13_olympic1: 0,
      course13_lasvegas1: 0,
      course13_score2: 6,
      course13_put2: 3,
      course13_olympic2: 3,
      course13_lasvegas2: 0,
      course13_score3: 7,
      course13_put3: 3,
      course13_olympic3: 4,
      course13_lasvegas3: 0,
      course13_score4: 8,
      course13_put4: 4,
      course13_olympic4: 1,
      course13_lasvegas4: 0,

      course14_no: 'IN5',
      course14_score1: 5,
      course14_put1: 2,
      course14_olympic1: 0,
      course14_lasvegas1: 0,
      course14_score2: 6,
      course14_put2: 3,
      course14_olympic2: 3,
      course14_lasvegas2: 0,
      course14_score3: 7,
      course14_put3: 3,
      course14_olympic3: 4,
      course14_lasvegas3: 0,
      course14_score4: 8,
      course14_put4: 4,
      course14_olympic4: 1,
      course14_lasvegas4: 0,

      course15_no: 'IN6',
      course15_score1: 5,
      course15_put1: 2,
      course15_olympic1: 0,
      course15_lasvegas1: 0,
      course15_score2: 6,
      course15_put2: 3,
      course15_olympic2: 3,
      course15_lasvegas2: 0,
      course15_score3: 7,
      course15_put3: 3,
      course15_olympic3: 4,
      course15_lasvegas3: 0,
      course15_score4: 8,
      course15_put4: 4,
      course15_olympic4: 1,
      course15_lasvegas4: 0,

      course16_no: 'IN7',
      course16_score1: 5,
      course16_put1: 2,
      course16_olympic1: 0,
      course16_lasvegas1: 0,
      course16_score2: 6,
      course16_put2: 3,
      course16_olympic2: 3,
      course16_lasvegas2: 0,
      course16_score3: 7,
      course16_put3: 3,
      course16_olympic3: 4,
      course16_lasvegas3: 0,
      course16_score4: 8,
      course16_put4: 4,
      course16_olympic4: 1,
      course16_lasvegas4: 0,

      course17_no: 'IN8',
      course17_score1: 5,
      course17_put1: 2,
      course17_olympic1: 0,
      course17_lasvegas1: 0,
      course17_score2: 6,
      course17_put2: 3,
      course17_olympic2: 3,
      course17_lasvegas2: 0,
      course17_score3: 7,
      course17_put3: 3,
      course17_olympic3: 4,
      course17_lasvegas3: 0,
      course17_score4: 8,
      course17_put4: 4,
      course17_olympic4: 1,
      course17_lasvegas4: 0,

      course18_no: 'IN9',
      course18_score1: 5,
      course18_put1: 2,
      course18_olympic1: 0,
      course18_lasvegas1: 0,
      course18_score2: 6,
      course18_put2: 3,
      course18_olympic2: 3,
      course18_lasvegas2: 0,
      course18_score3: 7,
      course18_put3: 3,
      course18_olympic3: 4,
      course18_lasvegas3: 0,
      course18_score4: 8,
      course18_put4: 4,
      course18_olympic4: 1,
      course18_lasvegas4: 0,

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