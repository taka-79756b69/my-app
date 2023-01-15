import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';

@Component({
  selector: 'app-scoreedit',
  templateUrl: './scoreedit.component.html',
  styleUrls: ['./scoreedit.component.scss']
})
export class ScoreeditComponent {

  scoreDetail: any
  courseIndex: any
  nowScore: any

  constructor(
    private route: ActivatedRoute,
    private scoreService: ScoreService) {
  }

  ngOnInit(): void {

    console.log("scorelist呼ばれた")

    this.route.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.getScore(params.get("scoreId")!)

      scoreObservable.subscribe(
        (data)=>{
          this.scoreDetail = data
          console.log('got data: '+ data)
        },
        (err)=>{
          console.log('got err: '+ err)
        },
        ()=>{
          console.log('complete!')
        }
      )

      this.courseIndex = params.get("courseIndex")
    })
  }

  countDownUser1() {
    if(this.scoreDetail.course[this.courseIndex].score1 !== 1 )
      this.scoreDetail.course[this.courseIndex].score1--
  }

  countUpUser1() {
    if(this.scoreDetail.course[this.courseIndex].score1 !== 15 )
      this.scoreDetail.course[this.courseIndex].score1++
  }

  countDownUser2() {
    if(this.scoreDetail.course[this.courseIndex].score2 !== 1 )
      this.scoreDetail.course[this.courseIndex].score2--
  }

  countUpUser2() {
    if(this.scoreDetail.course[this.courseIndex].score2 !== 15 )
      this.scoreDetail.course[this.courseIndex].score2++
  }

  countDownUser3() {
    if(this.scoreDetail.course[this.courseIndex].score3 !== 1 )
      this.scoreDetail.course[this.courseIndex].score3--
  }

  countUpUser3() {
    if(this.scoreDetail.course[this.courseIndex].score3 !== 15 )
      this.scoreDetail.course[this.courseIndex].score3++
  }

  countDownUser4() {
    if(this.scoreDetail.course[this.courseIndex].score4 !== 1 )
      this.scoreDetail.course[this.courseIndex].score4--
  }

  countUpUser4() {
    if(this.scoreDetail.course[this.courseIndex].score4 !== 15 )
      this.scoreDetail.course[this.courseIndex].score4++
  }
}
