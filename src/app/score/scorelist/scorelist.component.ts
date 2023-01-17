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
    this.score.course[0].olympic1 = this.dropDown1
  }

  countDownUser1() {
    if(this.score.course[0].score1 !== 1 )
      this.score.course[0].score1--
  }

  countUpUser1() {
    if(this.score.course[0].score1 !== 15 )
      this.score.course[0].score1++
  }

  countDownUser2() {
    if(this.score.course[0].score2 !== 1 )
      this.score.course[0].score2--
  }

  countUpUser2() {
    if(this.score.course[0].score2 !== 15 )
      this.score.course[0].score2++
  }

  countDownUser3() {
    if(this.score.course[0].score3 !== 1 )
      this.score.course[0].score3--
  }

  countUpUser3() {
    if(this.score.course[0].score3 !== 15 )
      this.score.course[0].score3++
  }

  countDownUser4() {
    if(this.score.course[0].score4 !== 1 )
      this.score.course[0].score4--
  }

  countUpUser4() {
    if(this.score.course[0].score4 !== 15 )
      this.score.course[0].score4++
  }
}
