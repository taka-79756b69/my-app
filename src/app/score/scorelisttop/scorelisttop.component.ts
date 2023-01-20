import { Component } from '@angular/core';
import { ScoreService } from 'src/app/common/service/score.service';

@Component({
  selector: 'app-scorelisttop',
  templateUrl: './scorelisttop.component.html',
  styleUrls: ['./scorelisttop.component.scss']
})
export class ScorelisttopComponent {

  scorelist: any

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {

    const scoreListObservable = this.scoreService.getScoreList()

    scoreListObservable.subscribe(
      (data)=>{
        this.scorelist = data
        //console.log('got data: '+ data)
        //console.log("一覧はとれてる")
      },
      (err)=>{
        //console.log('got err: '+ err)
      },
      ()=>{
        //console.log('complete!')
      }
    )
  }
}
