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
}
