import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scorelisttop',
  templateUrl: './scorelisttop.component.html',
  styleUrls: ['./scorelisttop.component.scss']
})
export class ScorelisttopComponent {

  scorelist: any

  constructor(
    private scoreService: ScoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {

    this.getScoreLists()
  }

  getScoreLists(): void {

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

  //新規保存
  deleteData(deleteId: any) {

    const scoreObservable = this.scoreService.deleteScore(deleteId)

    scoreObservable.subscribe(
      (data)=>{
        //console.log('got data: '+ JSON.stringify(data))
        //this.router.navigate(["score"])
      },
      (err)=>{
        //console.log('got err: '+ err)
      },
      ()=>{
        //console.log("保存完了")
        alert("削除しました")
        this.getScoreLists()
      }
    )
  }
}
