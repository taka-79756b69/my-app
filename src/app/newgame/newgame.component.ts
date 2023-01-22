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
