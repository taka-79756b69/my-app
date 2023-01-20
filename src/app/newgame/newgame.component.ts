import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from '../common/service/score.service';
import { User } from './user';

export class MyDateAdapter extends NativeDateAdapter {
  override getDateNames(): string[] {
    return [...Array(31).keys()].map((i) => String(i + 1));
  }
}

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService,
    private router: Router,
    dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('ja-JP');
  }

  //modelの初期化
  user: User = { name1: '', name2: '', name3: '', name4: '', playDate: new Date(), courseName: '' };
  //NgFormの作成
  form!: NgForm;

  //新規保存
  onSubmit(form: any) {

    //console.log(JSON.stringify(form.value))
    // リクエスト送信用にJSON作成
    // this.checkoutForm = ({
    //   name1: this.score.name1,
    //   name2: this.score.name2,
    //   name3: this.score.name3,
    //   name4: this.score.name4,
    //   course1_no: this.score.course1_no,
    //   course1_score1: this.score.course1_score1,
    //   course1_put1: this.score.course1_put1,
    //   course1_olympic1: this.score.course1_olympic1,
    //   course1_lasvegas1: this.score.course1_lasvegas1,
    //   course1_score2: this.score.course1_score2,
    //   course1_put2: this.score.course1_put2,
    //   course1_olympic2: this.score.course1_olympic2,
    //   course1_lasvegas2: this.score.course1_lasvegas2,
    //   course1_score3: this.score.course1_score3,
    //   course1_put3: this.score.course1_put3,
    //   course1_olympic3: this.score.course1_olympic3,
    //   course1_lasvegas3: this.score.course1_lasvegas3,
    //   course1_score4: this.score.course1_score4,
    //   course1_put4: this.score.course1_put4,
    //   course1_olympic4: this.score.course1_olympic4,
    //   course1_lasvegas4: this.score.course1_lasvegas4,

    //   course2_no: this.score.course2_no,
    //   course2_score1: this.score.course2_score1,
    //   course2_put1: this.score.course2_put1,
    //   course2_olympic1: this.score.course2_olympic1,
    //   course2_lasvegas1: this.score.course2_lasvegas1,
    //   course2_score2: this.score.course2_score2,
    //   course2_put2: this.score.course2_put2,
    //   course2_olympic2: this.score.course2_olympic2,
    //   course2_lasvegas2: this.score.course2_lasvegas2,
    //   course2_score3: this.score.course2_score3,
    //   course2_put3: this.score.course2_put3,
    //   course2_olympic3: this.score.course2_olympic3,
    //   course2_lasvegas3: this.score.course2_lasvegas3,
    //   course2_score4: this.score.course2_score4,
    //   course2_put4: this.score.course2_put4,
    //   course2_olympic4: this.score.course2_olympic4,
    //   course2_lasvegas4: this.score.course2_lasvegas4,

    //   course3_no: this.score.course3_no,
    //   course3_score1: this.score.course3_score1,
    //   course3_put1: this.score.course3_put1,
    //   course3_olympic1: this.score.course3_olympic1,
    //   course3_lasvegas1: this.score.course3_lasvegas1,
    //   course3_score2: this.score.course3_score2,
    //   course3_put2: this.score.course3_put2,
    //   course3_olympic2: this.score.course3_olympic2,
    //   course3_lasvegas2: this.score.course3_lasvegas2,
    //   course3_score3: this.score.course3_score3,
    //   course3_put3: this.score.course3_put3,
    //   course3_olympic3: this.score.course3_olympic3,
    //   course3_lasvegas3: this.score.course3_lasvegas3,
    //   course3_score4: this.score.course3_score4,
    //   course3_put4: this.score.course3_put4,
    //   course3_olympic4: this.score.course3_olympic4,
    //   course3_lasvegas4: this.score.course3_lasvegas4,

    //   course4_no: this.score.course4_no,
    //   course4_score1: this.score.course4_score1,
    //   course4_put1: this.score.course4_put1,
    //   course4_olympic1: this.score.course4_olympic1,
    //   course4_lasvegas1: this.score.course4_lasvegas1,
    //   course4_score2: this.score.course4_score2,
    //   course4_put2: this.score.course4_put2,
    //   course4_olympic2: this.score.course4_olympic2,
    //   course4_lasvegas2: this.score.course4_lasvegas2,
    //   course4_score3: this.score.course4_score3,
    //   course4_put3: this.score.course4_put3,
    //   course4_olympic3: this.score.course4_olympic3,
    //   course4_lasvegas3: this.score.course4_lasvegas3,
    //   course4_score4: this.score.course4_score4,
    //   course4_put4: this.score.course4_put4,
    //   course4_olympic4: this.score.course4_olympic4,
    //   course4_lasvegas4: this.score.course4_lasvegas4,

    //   course5_no: this.score.course5_no,
    //   course5_score1: this.score.course5_score1,
    //   course5_put1: this.score.course5_put1,
    //   course5_olympic1: this.score.course5_olympic1,
    //   course5_lasvegas1: this.score.course5_lasvegas1,
    //   course5_score2: this.score.course5_score2,
    //   course5_put2: this.score.course5_put2,
    //   course5_olympic2: this.score.course5_olympic2,
    //   course5_lasvegas2: this.score.course5_lasvegas2,
    //   course5_score3: this.score.course5_score3,
    //   course5_put3: this.score.course5_put3,
    //   course5_olympic3: this.score.course5_olympic3,
    //   course5_lasvegas3: this.score.course5_lasvegas3,
    //   course5_score4: this.score.course5_score4,
    //   course5_put4: this.score.course5_put4,
    //   course5_olympic4: this.score.course5_olympic4,
    //   course5_lasvegas4: this.score.course5_lasvegas4,

    //   course6_no: this.score.course6_no,
    //   course6_score1: this.score.course6_score1,
    //   course6_put1: this.score.course6_put1,
    //   course6_olympic1: this.score.course6_olympic1,
    //   course6_lasvegas1: this.score.course6_lasvegas1,
    //   course6_score2: this.score.course6_score2,
    //   course6_put2: this.score.course6_put2,
    //   course6_olympic2: this.score.course6_olympic2,
    //   course6_lasvegas2: this.score.course6_lasvegas2,
    //   course6_score3: this.score.course6_score3,
    //   course6_put3: this.score.course6_put3,
    //   course6_olympic3: this.score.course6_olympic3,
    //   course6_lasvegas3: this.score.course6_lasvegas3,
    //   course6_score4: this.score.course6_score4,
    //   course6_put4: this.score.course6_put4,
    //   course6_olympic4: this.score.course6_olympic4,
    //   course6_lasvegas4: this.score.course6_lasvegas4,

    //   course7_no: this.score.course7_no,
    //   course7_score1: this.score.course7_score1,
    //   course7_put1: this.score.course7_put1,
    //   course7_olympic1: this.score.course7_olympic1,
    //   course7_lasvegas1: this.score.course7_lasvegas1,
    //   course7_score2: this.score.course7_score2,
    //   course7_put2: this.score.course7_put2,
    //   course7_olympic2: this.score.course7_olympic2,
    //   course7_lasvegas2: this.score.course7_lasvegas2,
    //   course7_score3: this.score.course7_score3,
    //   course7_put3: this.score.course7_put3,
    //   course7_olympic3: this.score.course7_olympic3,
    //   course7_lasvegas3: this.score.course7_lasvegas3,
    //   course7_score4: this.score.course7_score4,
    //   course7_put4: this.score.course7_put4,
    //   course7_olympic4: this.score.course7_olympic4,
    //   course7_lasvegas4: this.score.course7_lasvegas4,

    //   course8_no: this.score.course8_no,
    //   course8_score1: this.score.course8_score1,
    //   course8_put1: this.score.course8_put1,
    //   course8_olympic1: this.score.course8_olympic1,
    //   course8_lasvegas1: this.score.course8_lasvegas1,
    //   course8_score2: this.score.course8_score2,
    //   course8_put2: this.score.course8_put2,
    //   course8_olympic2: this.score.course8_olympic2,
    //   course8_lasvegas2: this.score.course8_lasvegas2,
    //   course8_score3: this.score.course8_score3,
    //   course8_put3: this.score.course8_put3,
    //   course8_olympic3: this.score.course8_olympic3,
    //   course8_lasvegas3: this.score.course8_lasvegas3,
    //   course8_score4: this.score.course8_score4,
    //   course8_put4: this.score.course8_put4,
    //   course8_olympic4: this.score.course8_olympic4,
    //   course8_lasvegas4: this.score.course8_lasvegas4,

    //   course9_no: this.score.course9_no,
    //   course9_score1: this.score.course9_score1,
    //   course9_put1: this.score.course9_put1,
    //   course9_olympic1: this.score.course9_olympic1,
    //   course9_lasvegas1: this.score.course9_lasvegas1,
    //   course9_score2: this.score.course9_score2,
    //   course9_put2: this.score.course9_put2,
    //   course9_olympic2: this.score.course9_olympic2,
    //   course9_lasvegas2: this.score.course9_lasvegas2,
    //   course9_score3: this.score.course9_score3,
    //   course9_put3: this.score.course9_put3,
    //   course9_olympic3: this.score.course9_olympic3,
    //   course9_lasvegas3: this.score.course9_lasvegas3,
    //   course9_score4: this.score.course9_score4,
    //   course9_put4: this.score.course9_put4,
    //   course9_olympic4: this.score.course9_olympic4,
    //   course9_lasvegas4: this.score.course9_lasvegas4,

    //   course10_no: this.score.course10_no,
    //   course10_score1: this.score.course10_score1,
    //   course10_put1: this.score.course10_put1,
    //   course10_olympic1: this.score.course10_olympic1,
    //   course10_lasvegas1: this.score.course10_lasvegas1,
    //   course10_score2: this.score.course10_score2,
    //   course10_put2: this.score.course10_put2,
    //   course10_olympic2: this.score.course10_olympic2,
    //   course10_lasvegas2: this.score.course10_lasvegas2,
    //   course10_score3: this.score.course10_score3,
    //   course10_put3: this.score.course10_put3,
    //   course10_olympic3: this.score.course10_olympic3,
    //   course10_lasvegas3: this.score.course10_lasvegas3,
    //   course10_score4: this.score.course10_score4,
    //   course10_put4: this.score.course10_put4,
    //   course10_olympic4: this.score.course10_olympic4,
    //   course10_lasvegas4: this.score.course10_lasvegas4,

    //   course11_no: this.score.course11_no,
    //   course11_score1: this.score.course11_score1,
    //   course11_put1: this.score.course11_put1,
    //   course11_olympic1: this.score.course11_olympic1,
    //   course11_lasvegas1: this.score.course11_lasvegas1,
    //   course11_score2: this.score.course11_score2,
    //   course11_put2: this.score.course11_put2,
    //   course11_olympic2: this.score.course11_olympic2,
    //   course11_lasvegas2: this.score.course11_lasvegas2,
    //   course11_score3: this.score.course11_score3,
    //   course11_put3: this.score.course11_put3,
    //   course11_olympic3: this.score.course11_olympic3,
    //   course11_lasvegas3: this.score.course11_lasvegas3,
    //   course11_score4: this.score.course11_score4,
    //   course11_put4: this.score.course11_put4,
    //   course11_olympic4: this.score.course11_olympic4,
    //   course11_lasvegas4: this.score.course11_lasvegas4,

    //   course12_no: this.score.course12_no,
    //   course12_score1: this.score.course12_score1,
    //   course12_put1: this.score.course12_put1,
    //   course12_olympic1: this.score.course12_olympic1,
    //   course12_lasvegas1: this.score.course12_lasvegas1,
    //   course12_score2: this.score.course12_score2,
    //   course12_put2: this.score.course12_put2,
    //   course12_olympic2: this.score.course12_olympic2,
    //   course12_lasvegas2: this.score.course12_lasvegas2,
    //   course12_score3: this.score.course12_score3,
    //   course12_put3: this.score.course12_put3,
    //   course12_olympic3: this.score.course12_olympic3,
    //   course12_lasvegas3: this.score.course12_lasvegas3,
    //   course12_score4: this.score.course12_score4,
    //   course12_put4: this.score.course12_put4,
    //   course12_olympic4: this.score.course12_olympic4,
    //   course12_lasvegas4: this.score.course12_lasvegas4,

    //   course13_no: this.score.course13_no,
    //   course13_score1: this.score.course13_score1,
    //   course13_put1: this.score.course13_put1,
    //   course13_olympic1: this.score.course13_olympic1,
    //   course13_lasvegas1: this.score.course13_lasvegas1,
    //   course13_score2: this.score.course13_score2,
    //   course13_put2: this.score.course13_put2,
    //   course13_olympic2: this.score.course13_olympic2,
    //   course13_lasvegas2: this.score.course13_lasvegas2,
    //   course13_score3: this.score.course13_score3,
    //   course13_put3: this.score.course13_put3,
    //   course13_olympic3: this.score.course13_olympic3,
    //   course13_lasvegas3: this.score.course13_lasvegas3,
    //   course13_score4: this.score.course13_score4,
    //   course13_put4: this.score.course13_put4,
    //   course13_olympic4: this.score.course13_olympic4,
    //   course13_lasvegas4: this.score.course13_lasvegas4,

    //   course14_no: this.score.course14_no,
    //   course14_score1: this.score.course14_score1,
    //   course14_put1: this.score.course14_put1,
    //   course14_olympic1: this.score.course14_olympic1,
    //   course14_lasvegas1: this.score.course14_lasvegas1,
    //   course14_score2: this.score.course14_score2,
    //   course14_put2: this.score.course14_put2,
    //   course14_olympic2: this.score.course14_olympic2,
    //   course14_lasvegas2: this.score.course14_lasvegas2,
    //   course14_score3: this.score.course14_score3,
    //   course14_put3: this.score.course14_put3,
    //   course14_olympic3: this.score.course14_olympic3,
    //   course14_lasvegas3: this.score.course14_lasvegas3,
    //   course14_score4: this.score.course14_score4,
    //   course14_put4: this.score.course14_put4,
    //   course14_olympic4: this.score.course14_olympic4,
    //   course14_lasvegas4: this.score.course14_lasvegas4,

    //   course15_no: this.score.course15_no,
    //   course15_score1: this.score.course15_score1,
    //   course15_put1: this.score.course15_put1,
    //   course15_olympic1: this.score.course15_olympic1,
    //   course15_lasvegas1: this.score.course15_lasvegas1,
    //   course15_score2: this.score.course15_score2,
    //   course15_put2: this.score.course15_put2,
    //   course15_olympic2: this.score.course15_olympic2,
    //   course15_lasvegas2: this.score.course15_lasvegas2,
    //   course15_score3: this.score.course15_score3,
    //   course15_put3: this.score.course15_put3,
    //   course15_olympic3: this.score.course15_olympic3,
    //   course15_lasvegas3: this.score.course15_lasvegas3,
    //   course15_score4: this.score.course15_score4,
    //   course15_put4: this.score.course15_put4,
    //   course15_olympic4: this.score.course15_olympic4,
    //   course15_lasvegas4: this.score.course15_lasvegas4,

    //   course16_no: this.score.course16_no,
    //   course16_score1: this.score.course16_score1,
    //   course16_put1: this.score.course16_put1,
    //   course16_olympic1: this.score.course16_olympic1,
    //   course16_lasvegas1: this.score.course16_lasvegas1,
    //   course16_score2: this.score.course16_score2,
    //   course16_put2: this.score.course16_put2,
    //   course16_olympic2: this.score.course16_olympic2,
    //   course16_lasvegas2: this.score.course16_lasvegas2,
    //   course16_score3: this.score.course16_score3,
    //   course16_put3: this.score.course16_put3,
    //   course16_olympic3: this.score.course16_olympic3,
    //   course16_lasvegas3: this.score.course16_lasvegas3,
    //   course16_score4: this.score.course16_score4,
    //   course16_put4: this.score.course16_put4,
    //   course16_olympic4: this.score.course16_olympic4,
    //   course16_lasvegas4: this.score.course16_lasvegas4,

    //   course17_no: this.score.course17_no,
    //   course17_score1: this.score.course17_score1,
    //   course17_put1: this.score.course17_put1,
    //   course17_olympic1: this.score.course17_olympic1,
    //   course17_lasvegas1: this.score.course17_lasvegas1,
    //   course17_score2: this.score.course17_score2,
    //   course17_put2: this.score.course17_put2,
    //   course17_olympic2: this.score.course17_olympic2,
    //   course17_lasvegas2: this.score.course17_lasvegas2,
    //   course17_score3: this.score.course17_score3,
    //   course17_put3: this.score.course17_put3,
    //   course17_olympic3: this.score.course17_olympic3,
    //   course17_lasvegas3: this.score.course17_lasvegas3,
    //   course17_score4: this.score.course17_score4,
    //   course17_put4: this.score.course17_put4,
    //   course17_olympic4: this.score.course17_olympic4,
    //   course17_lasvegas4: this.score.course17_lasvegas4,

    //   course18_no: this.score.course18_no,
    //   course18_score1: this.score.course18_score1,
    //   course18_put1: this.score.course18_put1,
    //   course18_olympic1: this.score.course18_olympic1,
    //   course18_lasvegas1: this.score.course18_lasvegas1,
    //   course18_score2: this.score.course18_score2,
    //   course18_put2: this.score.course18_put2,
    //   course18_olympic2: this.score.course18_olympic2,
    //   course18_lasvegas2: this.score.course18_lasvegas2,
    //   course18_score3: this.score.course18_score3,
    //   course18_put3: this.score.course18_put3,
    //   course18_olympic3: this.score.course18_olympic3,
    //   course18_lasvegas3: this.score.course18_lasvegas3,
    //   course18_score4: this.score.course18_score4,
    //   course18_put4: this.score.course18_put4,
    //   course18_olympic4: this.score.course18_olympic4,
    //   course18_lasvegas4: this.score.course18_lasvegas4,
    // });

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.newInsert(form.value)

      scoreObservable.subscribe(
        (data)=>{
          //console.log('got data: '+ JSON.stringify(data))
          //this.router.navigate(["score"])
          this.reload()
        },
        (err)=>{
          //console.log('got err: '+ err)
        },
        ()=>{
          //console.log("保存完了")
        }
      )
    })
  }

  reload(){
    //ここで最新のレコードを取ってスコア入力画面に遷移
    //this.router.navigate(["score/:scoreId"])
    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.getScoreListNewOne()

      scoreObservable.subscribe(
        (data)=>{
          //console.log('got data: '+ JSON.stringify(data))
          this.router.navigate(["score/"+data[0]._id])
        },
        (err)=>{
          //console.log('got err: '+ err)
        },
        ()=>{
          //console.log("保存完了")
        }
      )
    })
  }
}
