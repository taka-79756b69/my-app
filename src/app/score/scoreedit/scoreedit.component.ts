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
    })
  }
}
