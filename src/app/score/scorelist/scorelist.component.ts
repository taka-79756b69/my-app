import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';

@Component({
  selector: 'app-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.scss']
})
export class ScorelistComponent {

  score: any
  dropDown1: any
  courseIndex: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService
    )
   {}

  ngOnInit(): void {

    //console.log("scorelist呼ばれた")

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.getScore(params.get("scoreId")!)

      scoreObservable.subscribe(
        (data)=>{
          this.score = data
          //console.log('got data: '+ data)
        },
        (err)=>{
          console.log('got err: '+ err)
        },
        ()=>{
          //console.log('complete!')
        }
      )
    })
  }

  doSubmit() {

  }

  cngDropDown1(){
    this.score.course1_olympic1 = this.dropDown1
  }
  course1ScoreCountDown_User1() {
    if(this.score.course1_score1 !== 1 )
      this.score.course1_score1--
  }
  course1ScoreCountUp_User1() {
    if(this.score.course1_score1 !== 15 )
      this.score.course1_score1++
  }
  course1ScoreCountDown_User2() {
    if(this.score.course1_score2 !== 1 )
      this.score.course1_score2--
  }
  course1ScoreCountUp_User2() {
    if(this.score.course1_score2 !== 15 )
      this.score.course1_score2++
  }
  course1ScoreCountDown_User3() {
    if(this.score.course1_score3 !== 1 )
      this.score.course1_score3--
  }
  course1ScoreCountUp_User3() {
    if(this.score.course1_score3 !== 15 )
      this.score.course1_score3++
  }
  course1ScoreCountDown_User4() {
    if(this.score.course1_score4 !== 1 )
      this.score.course1_score4--
  }
  course1ScoreCountUp_User4() {
    if(this.score.course1_score4 !== 15 )
      this.score.course1_score4++
  }

  course2ScoreCountDown_User1() {
    if(this.score.course2_score1 !== 1 )
      this.score.course2_score1--
  }
  course2ScoreCountUp_User1() {
    if(this.score.course2_score1 !== 15 )
      this.score.course2_score1++
  }
  course2ScoreCountDown_User2() {
    if(this.score.course2_score2 !== 1 )
      this.score.course2_score2--
  }
  course2ScoreCountUp_User2() {
    if(this.score.course2_score2 !== 15 )
      this.score.course2_score2++
  }
  course2ScoreCountDown_User3() {
    if(this.score.course2_score3 !== 1 )
      this.score.course2_score3--
  }
  course2ScoreCountUp_User3() {
    if(this.score.course2_score3 !== 15 )
      this.score.course2_score3++
  }
  course2ScoreCountDown_User4() {
    if(this.score.course2_score4 !== 1 )
      this.score.course2_score4--
  }
  course2ScoreCountUp_User4() {
    if(this.score.course2_score4 !== 15 )
      this.score.course2_score4++
  }

  course3ScoreCountDown_User1() {
    if(this.score.course3_score1 !== 1 )
      this.score.course3_score1--
  }
  course3ScoreCountUp_User1() {
    if(this.score.course3_score1 !== 15 )
      this.score.course3_score1++
  }
  course3ScoreCountDown_User2() {
    if(this.score.course3_score2 !== 1 )
      this.score.course3_score2--
  }
  course3ScoreCountUp_User2() {
    if(this.score.course3_score2 !== 15 )
      this.score.course3_score2++
  }
  course3ScoreCountDown_User3() {
    if(this.score.course3_score3 !== 1 )
      this.score.course3_score3--
  }
  course3ScoreCountUp_User3() {
    if(this.score.course3_score3 !== 15 )
      this.score.course3_score3++
  }
  course3ScoreCountDown_User4() {
    if(this.score.course3_score4 !== 1 )
      this.score.course3_score4--
  }
  course3ScoreCountUp_User4() {
    if(this.score.course3_score4 !== 15 )
      this.score.course3_score4++
  }

  course4ScoreCountDown_User1() {
    if(this.score.course4_score1 !== 1 )
      this.score.course4_score1--
  }
  course4ScoreCountUp_User1() {
    if(this.score.course4_score1 !== 15 )
      this.score.course4_score1++
  }
  course4ScoreCountDown_User2() {
    if(this.score.course4_score2 !== 1 )
      this.score.course4_score2--
  }
  course4ScoreCountUp_User2() {
    if(this.score.course4_score2 !== 15 )
      this.score.course4_score2++
  }
  course4ScoreCountDown_User3() {
    if(this.score.course4_score3 !== 1 )
      this.score.course4_score3--
  }
  course4ScoreCountUp_User3() {
    if(this.score.course4_score3 !== 15 )
      this.score.course4_score3++
  }
  course4ScoreCountDown_User4() {
    if(this.score.course4_score4 !== 1 )
      this.score.course4_score4--
  }
  course4ScoreCountUp_User4() {
    if(this.score.course4_score4 !== 15 )
      this.score.course4_score4++
  }

  course5ScoreCountDown_User1() {
    if(this.score.course5_score1 !== 1 )
      this.score.course5_score1--
  }
  course5ScoreCountUp_User1() {
    if(this.score.course5_score1 !== 15 )
      this.score.course5_score1++
  }
  course5ScoreCountDown_User2() {
    if(this.score.course5_score2 !== 1 )
      this.score.course5_score2--
  }
  course5ScoreCountUp_User2() {
    if(this.score.course5_score2 !== 15 )
      this.score.course5_score2++
  }
  course5ScoreCountDown_User3() {
    if(this.score.course5_score3 !== 1 )
      this.score.course5_score3--
  }
  course5ScoreCountUp_User3() {
    if(this.score.course5_score3 !== 15 )
      this.score.course5_score3++
  }
  course5ScoreCountDown_User4() {
    if(this.score.course5_score4 !== 1 )
      this.score.course5_score4--
  }
  course5ScoreCountUp_User4() {
    if(this.score.course5_score4 !== 15 )
      this.score.course5_score4++
  }

  course6ScoreCountDown_User1() {
    if(this.score.course6_score1 !== 1 )
      this.score.course6_score1--
  }
  course6ScoreCountUp_User1() {
    if(this.score.course6_score1 !== 15 )
      this.score.course6_score1++
  }
  course6ScoreCountDown_User2() {
    if(this.score.course6_score2 !== 1 )
      this.score.course6_score2--
  }
  course6ScoreCountUp_User2() {
    if(this.score.course6_score2 !== 15 )
      this.score.course6_score2++
  }
  course6ScoreCountDown_User3() {
    if(this.score.course6_score3 !== 1 )
      this.score.course6_score3--
  }
  course6ScoreCountUp_User3() {
    if(this.score.course6_score3 !== 15 )
      this.score.course6_score3++
  }
  course6ScoreCountDown_User4() {
    if(this.score.course6_score4 !== 1 )
      this.score.course6_score4--
  }
  course6ScoreCountUp_User4() {
    if(this.score.course6_score4 !== 15 )
      this.score.course6_score4++
  }

  course7ScoreCountDown_User1() {
    if(this.score.course7_score1 !== 1 )
      this.score.course7_score1--
  }
  course7ScoreCountUp_User1() {
    if(this.score.course7_score1 !== 15 )
      this.score.course7_score1++
  }
  course7ScoreCountDown_User2() {
    if(this.score.course7_score2 !== 1 )
      this.score.course7_score2--
  }
  course7ScoreCountUp_User2() {
    if(this.score.course7_score2 !== 15 )
      this.score.course7_score2++
  }
  course7ScoreCountDown_User3() {
    if(this.score.course7_score3 !== 1 )
      this.score.course7_score3--
  }
  course7ScoreCountUp_User3() {
    if(this.score.course7_score3 !== 15 )
      this.score.course7_score3++
  }
  course7ScoreCountDown_User4() {
    if(this.score.course7_score4 !== 1 )
      this.score.course7_score4--
  }
  course7ScoreCountUp_User4() {
    if(this.score.course7_score4 !== 15 )
      this.score.course7_score4++
  }

  course8ScoreCountDown_User1() {
    if(this.score.course8_score1 !== 1 )
      this.score.course8_score1--
  }
  course8ScoreCountUp_User1() {
    if(this.score.course8_score1 !== 15 )
      this.score.course8_score1++
  }
  course8ScoreCountDown_User2() {
    if(this.score.course8_score2 !== 1 )
      this.score.course8_score2--
  }
  course8ScoreCountUp_User2() {
    if(this.score.course8_score2 !== 15 )
      this.score.course8_score2++
  }
  course8ScoreCountDown_User3() {
    if(this.score.course8_score3 !== 1 )
      this.score.course8_score3--
  }
  course8ScoreCountUp_User3() {
    if(this.score.course8_score3 !== 15 )
      this.score.course8_score3++
  }
  course8ScoreCountDown_User4() {
    if(this.score.course8_score4 !== 1 )
      this.score.course8_score4--
  }
  course8ScoreCountUp_User4() {
    if(this.score.course8_score4 !== 15 )
      this.score.course8_score4++
  }

  course9ScoreCountDown_User1() {
    if(this.score.course9_score1 !== 1 )
      this.score.course9_score1--
  }
  course9ScoreCountUp_User1() {
    if(this.score.course9_score1 !== 15 )
      this.score.course9_score1++
  }
  course9ScoreCountDown_User2() {
    if(this.score.course9_score2 !== 1 )
      this.score.course9_score2--
  }
  course9ScoreCountUp_User2() {
    if(this.score.course9_score2 !== 15 )
      this.score.course9_score2++
  }
  course9ScoreCountDown_User3() {
    if(this.score.course9_score3 !== 1 )
      this.score.course9_score3--
  }
  course9ScoreCountUp_User3() {
    if(this.score.course9_score3 !== 15 )
      this.score.course9_score3++
  }
  course9ScoreCountDown_User4() {
    if(this.score.course9_score4 !== 1 )
      this.score.course9_score4--
  }
  course9ScoreCountUp_User4() {
    if(this.score.course9_score4 !== 15 )
      this.score.course9_score4++
  }

  course10ScoreCountDown_User1() {
    if(this.score.course10_score1 !== 1 )
      this.score.course10_score1--
  }
  course10ScoreCountUp_User1() {
    if(this.score.course10_score1 !== 15 )
      this.score.course10_score1++
  }
  course10ScoreCountDown_User2() {
    if(this.score.course10_score2 !== 1 )
      this.score.course10_score2--
  }
  course10ScoreCountUp_User2() {
    if(this.score.course10_score2 !== 15 )
      this.score.course10_score2++
  }
  course10ScoreCountDown_User3() {
    if(this.score.course10_score3 !== 1 )
      this.score.course10_score3--
  }
  course10ScoreCountUp_User3() {
    if(this.score.course10_score3 !== 15 )
      this.score.course10_score3++
  }
  course10ScoreCountDown_User4() {
    if(this.score.course10_score4 !== 1 )
      this.score.course10_score4--
  }
  course10ScoreCountUp_User4() {
    if(this.score.course10_score4 !== 15 )
      this.score.course10_score4++
  }

  course11ScoreCountDown_User1() {
    if(this.score.course11_score1 !== 1 )
      this.score.course11_score1--
  }
  course11ScoreCountUp_User1() {
    if(this.score.course11_score1 !== 15 )
      this.score.course11_score1++
  }
  course11ScoreCountDown_User2() {
    if(this.score.course11_score2 !== 1 )
      this.score.course11_score2--
  }
  course11ScoreCountUp_User2() {
    if(this.score.course11_score2 !== 15 )
      this.score.course11_score2++
  }
  course11ScoreCountDown_User3() {
    if(this.score.course11_score3 !== 1 )
      this.score.course11_score3--
  }
  course11ScoreCountUp_User3() {
    if(this.score.course11_score3 !== 15 )
      this.score.course11_score3++
  }
  course11ScoreCountDown_User4() {
    if(this.score.course11_score4 !== 1 )
      this.score.course11_score4--
  }
  course11ScoreCountUp_User4() {
    if(this.score.course11_score4 !== 15 )
      this.score.course11_score4++
  }

  course12ScoreCountDown_User1() {
    if(this.score.course12_score1 !== 1 )
      this.score.course12_score1--
  }
  course12ScoreCountUp_User1() {
    if(this.score.course12_score1 !== 15 )
      this.score.course12_score1++
  }
  course12ScoreCountDown_User2() {
    if(this.score.course12_score2 !== 1 )
      this.score.course12_score2--
  }
  course12ScoreCountUp_User2() {
    if(this.score.course12_score2 !== 15 )
      this.score.course12_score2++
  }
  course12ScoreCountDown_User3() {
    if(this.score.course12_score3 !== 1 )
      this.score.course12_score3--
  }
  course12ScoreCountUp_User3() {
    if(this.score.course12_score3 !== 15 )
      this.score.course12_score3++
  }
  course12ScoreCountDown_User4() {
    if(this.score.course12_score4 !== 1 )
      this.score.course12_score4--
  }
  course12ScoreCountUp_User4() {
    if(this.score.course12_score4 !== 15 )
      this.score.course12_score4++
  }

  course13ScoreCountDown_User1() {
    if(this.score.course13_score1 !== 1 )
      this.score.course13_score1--
  }
  course13ScoreCountUp_User1() {
    if(this.score.course13_score1 !== 15 )
      this.score.course13_score1++
  }
  course13ScoreCountDown_User2() {
    if(this.score.course13_score2 !== 1 )
      this.score.course13_score2--
  }
  course13ScoreCountUp_User2() {
    if(this.score.course13_score2 !== 15 )
      this.score.course13_score2++
  }
  course13ScoreCountDown_User3() {
    if(this.score.course13_score3 !== 1 )
      this.score.course13_score3--
  }
  course13ScoreCountUp_User3() {
    if(this.score.course13_score3 !== 15 )
      this.score.course13_score3++
  }
  course13ScoreCountDown_User4() {
    if(this.score.course13_score4 !== 1 )
      this.score.course13_score4--
  }
  course13ScoreCountUp_User4() {
    if(this.score.course13_score4 !== 15 )
      this.score.course13_score4++
  }

  course14ScoreCountDown_User1() {
    if(this.score.course14_score1 !== 1 )
      this.score.course14_score1--
  }
  course14ScoreCountUp_User1() {
    if(this.score.course14_score1 !== 15 )
      this.score.course14_score1++
  }
  course14ScoreCountDown_User2() {
    if(this.score.course14_score2 !== 1 )
      this.score.course14_score2--
  }
  course14ScoreCountUp_User2() {
    if(this.score.course14_score2 !== 15 )
      this.score.course14_score2++
  }
  course14ScoreCountDown_User3() {
    if(this.score.course14_score3 !== 1 )
      this.score.course14_score3--
  }
  course14ScoreCountUp_User3() {
    if(this.score.course14_score3 !== 15 )
      this.score.course14_score3++
  }
  course14ScoreCountDown_User4() {
    if(this.score.course14_score4 !== 1 )
      this.score.course14_score4--
  }
  course14ScoreCountUp_User4() {
    if(this.score.course14_score4 !== 15 )
      this.score.course14_score4++
  }

  course15ScoreCountDown_User1() {
    if(this.score.course15_score1 !== 1 )
      this.score.course15_score1--
  }
  course15ScoreCountUp_User1() {
    if(this.score.course15_score1 !== 15 )
      this.score.course15_score1++
  }
  course15ScoreCountDown_User2() {
    if(this.score.course15_score2 !== 1 )
      this.score.course15_score2--
  }
  course15ScoreCountUp_User2() {
    if(this.score.course15_score2 !== 15 )
      this.score.course15_score2++
  }
  course15ScoreCountDown_User3() {
    if(this.score.course15_score3 !== 1 )
      this.score.course15_score3--
  }
  course15ScoreCountUp_User3() {
    if(this.score.course15_score3 !== 15 )
      this.score.course15_score3++
  }
  course15ScoreCountDown_User4() {
    if(this.score.course15_score4 !== 1 )
      this.score.course15_score4--
  }
  course15ScoreCountUp_User4() {
    if(this.score.course15_score4 !== 15 )
      this.score.course15_score4++
  }

  course16ScoreCountDown_User1() {
    if(this.score.course16_score1 !== 1 )
      this.score.course16_score1--
  }
  course16ScoreCountUp_User1() {
    if(this.score.course16_score1 !== 15 )
      this.score.course16_score1++
  }
  course16ScoreCountDown_User2() {
    if(this.score.course16_score2 !== 1 )
      this.score.course16_score2--
  }
  course16ScoreCountUp_User2() {
    if(this.score.course16_score2 !== 15 )
      this.score.course16_score2++
  }
  course16ScoreCountDown_User3() {
    if(this.score.course16_score3 !== 1 )
      this.score.course16_score3--
  }
  course16ScoreCountUp_User3() {
    if(this.score.course16_score3 !== 15 )
      this.score.course16_score3++
  }
  course16ScoreCountDown_User4() {
    if(this.score.course16_score4 !== 1 )
      this.score.course16_score4--
  }
  course16ScoreCountUp_User4() {
    if(this.score.course16_score4 !== 15 )
      this.score.course16_score4++
  }

  course17ScoreCountDown_User1() {
    if(this.score.course17_score1 !== 1 )
      this.score.course17_score1--
  }
  course17ScoreCountUp_User1() {
    if(this.score.course17_score1 !== 15 )
      this.score.course17_score1++
  }
  course17ScoreCountDown_User2() {
    if(this.score.course17_score2 !== 1 )
      this.score.course17_score2--
  }
  course17ScoreCountUp_User2() {
    if(this.score.course17_score2 !== 15 )
      this.score.course17_score2++
  }
  course17ScoreCountDown_User3() {
    if(this.score.course17_score3 !== 1 )
      this.score.course17_score3--
  }
  course17ScoreCountUp_User3() {
    if(this.score.course17_score3 !== 15 )
      this.score.course17_score3++
  }
  course17ScoreCountDown_User4() {
    if(this.score.course17_score4 !== 1 )
      this.score.course17_score4--
  }
  course17ScoreCountUp_User4() {
    if(this.score.course17_score4 !== 15 )
      this.score.course17_score4++
  }

  course18ScoreCountDown_User1() {
    if(this.score.course18_score1 !== 1 )
      this.score.course18_score1--
  }
  course18ScoreCountUp_User1() {
    if(this.score.course18_score1 !== 15 )
      this.score.course18_score1++
  }
  course18ScoreCountDown_User2() {
    if(this.score.course18_score2 !== 1 )
      this.score.course18_score2--
  }
  course18ScoreCountUp_User2() {
    if(this.score.course18_score2 !== 15 )
      this.score.course18_score2++
  }
  course18ScoreCountDown_User3() {
    if(this.score.course18_score3 !== 1 )
      this.score.course18_score3--
  }
  course18ScoreCountUp_User3() {
    if(this.score.course18_score3 !== 15 )
      this.score.course18_score3++
  }
  course18ScoreCountDown_User4() {
    if(this.score.course18_score4 !== 1 )
      this.score.course18_score4--
  }
  course18ScoreCountUp_User4() {
    if(this.score.course18_score4 !== 15 )
      this.score.course18_score4++
  }
}
