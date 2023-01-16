import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { json } from 'express';
import { switchScan } from 'rxjs';
import { ScoreService } from 'src/app/common/service/score.service';
import { ScorelistComponent } from '../scorelist/scorelist.component';

@Component({
  selector: 'app-scoreedit',
  templateUrl: './scoreedit.component.html',
  styleUrls: ['./scoreedit.component.scss']
})

export class ScoreeditComponent {

  scoreDetail: any
  courseIndex: any
  dropDown1: any
  scoreId: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService,
    private location: Location) {
  }

  ngOnInit(): void {

    //console.log("scorelistEdit呼ばれた")

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.getScore(params.get("scoreId")!)

      scoreObservable.subscribe(
        (data)=>{
          this.scoreId = params.get("scoreId")
          this.scoreDetail = data
          this.courseIndex = params.get("courseIndex")
          this.initData(this.scoreDetail, this.courseIndex)
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

  initData(data: any, courseIndex: any) {
    this.dropDown1 = data.course[courseIndex].olympic1
  }

  doSubmit() {

    // this.scoreService.saveScore(this.scoreId, this.scoreDetail)
    // this.location.back()

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.saveScore(this.scoreId, this.scoreDetail)

      scoreObservable.subscribe(
        (data)=>{
          console.log('got data: '+ data)
        },
        (err)=>{
          console.log('got err: '+ err)
        },
        ()=>{
          this.location.back()
          console.log('complete!')
        }
      )
    })
  }

  cngDropDown1(){
    this.scoreDetail.course[this.courseIndex].olympic1 = this.dropDown1
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
