import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';

@Component({
  selector: 'app-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.scss']
})
export class ScorelistComponent {

  score: any
  courseIndex: any
  checkoutForm: any

  //ドロップダウンのモデル
  dropDown1_1: any
  dropDown1_2: any
  dropDown1_3: any
  dropDown1_4: any
  dropDown2_1: any
  dropDown2_2: any
  dropDown2_3: any
  dropDown2_4: any
  dropDown3_1: any
  dropDown3_2: any
  dropDown3_3: any
  dropDown3_4: any
  dropDown4_1: any
  dropDown4_2: any
  dropDown4_3: any
  dropDown4_4: any
  dropDown5_1: any
  dropDown5_2: any
  dropDown5_3: any
  dropDown5_4: any
  dropDown6_1: any
  dropDown6_2: any
  dropDown6_3: any
  dropDown6_4: any
  dropDown7_1: any
  dropDown7_2: any
  dropDown7_3: any
  dropDown7_4: any
  dropDown8_1: any
  dropDown8_2: any
  dropDown8_3: any
  dropDown8_4: any
  dropDown9_1: any
  dropDown9_2: any
  dropDown9_3: any
  dropDown9_4: any
  dropDown10_1: any
  dropDown10_2: any
  dropDown10_3: any
  dropDown10_4: any
  dropDown11_1: any
  dropDown11_2: any
  dropDown11_3: any
  dropDown11_4: any
  dropDown12_1: any
  dropDown12_2: any
  dropDown12_3: any
  dropDown12_4: any
  dropDown13_1: any
  dropDown13_2: any
  dropDown13_3: any
  dropDown13_4: any
  dropDown14_1: any
  dropDown14_2: any
  dropDown14_3: any
  dropDown14_4: any
  dropDown15_1: any
  dropDown15_2: any
  dropDown15_3: any
  dropDown15_4: any
  dropDown16_1: any
  dropDown16_2: any
  dropDown16_3: any
  dropDown16_4: any
  dropDown17_1: any
  dropDown17_2: any
  dropDown17_3: any
  dropDown17_4: any
  dropDown18_1: any
  dropDown18_2: any
  dropDown18_3: any
  dropDown18_4: any

  //ラジオボタンのモデル
  radioBtn1_1: any
  radioBtn1_2: any
  radioBtn1_3: any
  radioBtn1_4: any
  radioBtn2_1: any
  radioBtn2_2: any
  radioBtn2_3: any
  radioBtn2_4: any
  radioBtn3_1: any
  radioBtn3_2: any
  radioBtn3_3: any
  radioBtn3_4: any
  radioBtn4_1: any
  radioBtn4_2: any
  radioBtn4_3: any
  radioBtn4_4: any
  radioBtn5_1: any
  radioBtn5_2: any
  radioBtn5_3: any
  radioBtn5_4: any
  radioBtn6_1: any
  radioBtn6_2: any
  radioBtn6_3: any
  radioBtn6_4: any
  radioBtn7_1: any
  radioBtn7_2: any
  radioBtn7_3: any
  radioBtn7_4: any
  radioBtn8_1: any
  radioBtn8_2: any
  radioBtn8_3: any
  radioBtn8_4: any
  radioBtn9_1: any
  radioBtn9_2: any
  radioBtn9_3: any
  radioBtn9_4: any
  radioBtn10_1: any
  radioBtn10_2: any
  radioBtn10_3: any
  radioBtn10_4: any
  radioBtn11_1: any
  radioBtn11_2: any
  radioBtn11_3: any
  radioBtn11_4: any
  radioBtn12_1: any
  radioBtn12_2: any
  radioBtn12_3: any
  radioBtn12_4: any
  radioBtn13_1: any
  radioBtn13_2: any
  radioBtn13_3: any
  radioBtn13_4: any
  radioBtn14_1: any
  radioBtn14_2: any
  radioBtn14_3: any
  radioBtn14_4: any
  radioBtn15_1: any
  radioBtn15_2: any
  radioBtn15_3: any
  radioBtn15_4: any
  radioBtn16_1: any
  radioBtn16_2: any
  radioBtn16_3: any
  radioBtn16_4: any
  radioBtn17_1: any
  radioBtn17_2: any
  radioBtn17_3: any
  radioBtn17_4: any
  radioBtn18_1: any
  radioBtn18_2: any
  radioBtn18_3: any
  radioBtn18_4: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService,
    private formBuilder: FormBuilder,
    ){

    }

  ngOnInit(): void {

    //console.log("scorelist呼ばれた")

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.getScore(params.get("scoreId")!)

      scoreObservable.subscribe(
        (data)=>{
          this.score = data
          this.initDataSet()
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

  initDataSet() {
    this.dropDown1_1 = this.score.course1_olympic1
    this.dropDown1_2 = this.score.course1_olympic2
    this.dropDown1_3 = this.score.course1_olympic3
    this.dropDown1_4 = this.score.course1_olympic4
    this.dropDown2_1 = this.score.course2_olympic1
    this.dropDown2_2 = this.score.course2_olympic2
    this.dropDown2_3 = this.score.course2_olympic3
    this.dropDown2_4 = this.score.course2_olympic4
    this.dropDown3_1 = this.score.course3_olympic1
    this.dropDown3_2 = this.score.course3_olympic2
    this.dropDown3_3 = this.score.course3_olympic3
    this.dropDown3_4 = this.score.course3_olympic4
    this.dropDown4_1 = this.score.course4_olympic1
    this.dropDown4_2 = this.score.course4_olympic2
    this.dropDown4_3 = this.score.course4_olympic3
    this.dropDown4_4 = this.score.course4_olympic4
    this.dropDown5_1 = this.score.course5_olympic1
    this.dropDown5_2 = this.score.course5_olympic2
    this.dropDown5_3 = this.score.course5_olympic3
    this.dropDown5_4 = this.score.course5_olympic4
    this.dropDown6_1 = this.score.course6_olympic1
    this.dropDown6_2 = this.score.course6_olympic2
    this.dropDown6_3 = this.score.course6_olympic3
    this.dropDown6_4 = this.score.course6_olympic4
    this.dropDown7_1 = this.score.course7_olympic1
    this.dropDown7_2 = this.score.course7_olympic2
    this.dropDown7_3 = this.score.course7_olympic3
    this.dropDown7_4 = this.score.course7_olympic4
    this.dropDown8_1 = this.score.course8_olympic1
    this.dropDown8_2 = this.score.course8_olympic2
    this.dropDown8_3 = this.score.course8_olympic3
    this.dropDown8_4 = this.score.course8_olympic4
    this.dropDown9_1 = this.score.course9_olympic1
    this.dropDown9_2 = this.score.course9_olympic2
    this.dropDown9_3 = this.score.course9_olympic3
    this.dropDown9_4 = this.score.course9_olympic4
    this.dropDown10_1 = this.score.course10_olympic1
    this.dropDown10_2 = this.score.course10_olympic2
    this.dropDown10_3 = this.score.course10_olympic3
    this.dropDown10_4 = this.score.course10_olympic4
    this.dropDown11_1 = this.score.course11_olympic1
    this.dropDown11_2 = this.score.course11_olympic2
    this.dropDown11_3 = this.score.course11_olympic3
    this.dropDown11_4 = this.score.course11_olympic4
    this.dropDown12_1 = this.score.course12_olympic1
    this.dropDown12_2 = this.score.course12_olympic2
    this.dropDown12_3 = this.score.course12_olympic3
    this.dropDown12_4 = this.score.course12_olympic4
    this.dropDown13_1 = this.score.course13_olympic1
    this.dropDown13_2 = this.score.course13_olympic2
    this.dropDown13_3 = this.score.course13_olympic3
    this.dropDown13_4 = this.score.course13_olympic4
    this.dropDown14_1 = this.score.course14_olympic1
    this.dropDown14_2 = this.score.course14_olympic2
    this.dropDown14_3 = this.score.course14_olympic3
    this.dropDown14_4 = this.score.course14_olympic4
    this.dropDown15_1 = this.score.course15_olympic1
    this.dropDown15_2 = this.score.course15_olympic2
    this.dropDown15_3 = this.score.course15_olympic3
    this.dropDown15_4 = this.score.course15_olympic4
    this.dropDown16_1 = this.score.course16_olympic1
    this.dropDown16_2 = this.score.course16_olympic2
    this.dropDown16_3 = this.score.course16_olympic3
    this.dropDown16_4 = this.score.course16_olympic4
    this.dropDown17_1 = this.score.course17_olympic1
    this.dropDown17_2 = this.score.course17_olympic2
    this.dropDown17_3 = this.score.course17_olympic3
    this.dropDown17_4 = this.score.course17_olympic4
    this.dropDown18_1 = this.score.course18_olympic1
    this.dropDown18_2 = this.score.course18_olympic2
    this.dropDown18_3 = this.score.course18_olympic3
    this.dropDown18_4 = this.score.course18_olympic4

    this.radioBtn1_1 = this.score.course1_lasvegas1
    //this.radioBtn1_1 = 1
    this.radioBtn1_2 = this.score.course1_lasvegas2
    //this.radioBtn1_2 = 1
    this.radioBtn1_3 = this.score.course1_lasvegas3
    this.radioBtn1_4 = this.score.course1_lasvegas4
    this.radioBtn2_1 = this.score.course2_lasvegas1
    this.radioBtn2_2 = this.score.course2_lasvegas2
    this.radioBtn2_3 = this.score.course2_lasvegas3
    this.radioBtn2_4 = this.score.course2_lasvegas4
    this.radioBtn3_1 = this.score.course3_lasvegas1
    this.radioBtn3_2 = this.score.course3_lasvegas2
    this.radioBtn3_3 = this.score.course3_lasvegas3
    this.radioBtn3_4 = this.score.course3_lasvegas4
    this.radioBtn4_1 = this.score.course4_lasvegas1
    this.radioBtn4_2 = this.score.course4_lasvegas2
    this.radioBtn4_3 = this.score.course4_lasvegas3
    this.radioBtn4_4 = this.score.course4_lasvegas4
    this.radioBtn5_1 = this.score.course5_lasvegas1
    this.radioBtn5_2 = this.score.course5_lasvegas2
    this.radioBtn5_3 = this.score.course5_lasvegas3
    this.radioBtn5_4 = this.score.course5_lasvegas4
    this.radioBtn6_1 = this.score.course6_lasvegas1
    this.radioBtn6_2 = this.score.course6_lasvegas2
    this.radioBtn6_3 = this.score.course6_lasvegas3
    this.radioBtn6_4 = this.score.course6_lasvegas4
    this.radioBtn7_1 = this.score.course7_lasvegas1
    this.radioBtn7_2 = this.score.course7_lasvegas2
    this.radioBtn7_3 = this.score.course7_lasvegas3
    this.radioBtn7_4 = this.score.course7_lasvegas4
    this.radioBtn8_1 = this.score.course8_lasvegas1
    this.radioBtn8_2 = this.score.course8_lasvegas2
    this.radioBtn8_3 = this.score.course8_lasvegas3
    this.radioBtn8_4 = this.score.course8_lasvegas4
    this.radioBtn9_1 = this.score.course9_lasvegas1
    this.radioBtn9_2 = this.score.course9_lasvegas2
    this.radioBtn9_3 = this.score.course9_lasvegas3
    this.radioBtn9_4 = this.score.course9_lasvegas4
    this.radioBtn10_1 = this.score.course10_lasvegas1
    this.radioBtn10_2 = this.score.course10_lasvegas2
    this.radioBtn10_3 = this.score.course10_lasvegas3
    this.radioBtn10_4 = this.score.course10_lasvegas4
    this.radioBtn11_1 = this.score.course11_lasvegas1
    this.radioBtn11_2 = this.score.course11_lasvegas2
    this.radioBtn11_3 = this.score.course11_lasvegas3
    this.radioBtn11_4 = this.score.course11_lasvegas4
    this.radioBtn12_1 = this.score.course12_lasvegas1
    this.radioBtn12_2 = this.score.course12_lasvegas2
    this.radioBtn12_3 = this.score.course12_lasvegas3
    this.radioBtn12_4 = this.score.course12_lasvegas4
    this.radioBtn13_1 = this.score.course13_lasvegas1
    this.radioBtn13_2 = this.score.course13_lasvegas2
    this.radioBtn13_3 = this.score.course13_lasvegas3
    this.radioBtn13_4 = this.score.course13_lasvegas4
    this.radioBtn14_1 = this.score.course14_lasvegas1
    this.radioBtn14_2 = this.score.course14_lasvegas2
    this.radioBtn14_3 = this.score.course14_lasvegas3
    this.radioBtn14_4 = this.score.course14_lasvegas4
    this.radioBtn15_1 = this.score.course15_lasvegas1
    this.radioBtn15_2 = this.score.course15_lasvegas2
    this.radioBtn15_3 = this.score.course15_lasvegas3
    this.radioBtn15_4 = this.score.course15_lasvegas4
    this.radioBtn16_1 = this.score.course16_lasvegas1
    this.radioBtn16_2 = this.score.course16_lasvegas2
    this.radioBtn16_3 = this.score.course16_lasvegas3
    this.radioBtn16_4 = this.score.course16_lasvegas4
    this.radioBtn17_1 = this.score.course17_lasvegas1
    this.radioBtn17_2 = this.score.course17_lasvegas2
    this.radioBtn17_3 = this.score.course17_lasvegas3
    this.radioBtn17_4 = this.score.course17_lasvegas4
    this.radioBtn18_1 = this.score.course18_lasvegas1
    this.radioBtn18_2 = this.score.course18_lasvegas2
    this.radioBtn18_3 = this.score.course18_lasvegas3
    this.radioBtn18_4 = this.score.course18_lasvegas4

  }

  onSubmit() {
    // Process checkout data here
    //this.checkoutForm.reset();
    this.checkoutForm = ({
      name1: this.score.name1,
      name2: this.score.name2,
      name3: this.score.name3,
      name4: this.score.name4,
      course1_no: this.score.course1_no,
      course1_score1: this.score.course1_score1,
      course1_put1: this.score.course1_put1,
      course1_olympic1: this.score.course1_olympic1,
      course1_lasvegas1: this.score.course1_lasvegas1,
      course1_score2: this.score.course1_score2,
      course1_put2: this.score.course1_put2,
      course1_olympic2: this.score.course1_olympic2,
      course1_lasvegas2: this.score.course1_lasvegas2,
      course1_score3: this.score.course1_score3,
      course1_put3: this.score.course1_put3,
      course1_olympic3: this.score.course1_olympic3,
      course1_lasvegas3: this.score.course1_lasvegas3,
      course1_score4: this.score.course1_score4,
      course1_put4: this.score.course1_put4,
      course1_olympic4: this.score.course1_olympic4,
      course1_lasvegas4: this.score.course1_lasvegas4,

      course2_no: this.score.course2_no,
      course2_score1: this.score.course2_score1,
      course2_put1: this.score.course2_put1,
      course2_olympic1: this.score.course2_olympic1,
      course2_lasvegas1: this.score.course2_lasvegas1,
      course2_score2: this.score.course2_score2,
      course2_put2: this.score.course2_put2,
      course2_olympic2: this.score.course2_olympic2,
      course2_lasvegas2: this.score.course2_lasvegas2,
      course2_score3: this.score.course2_score3,
      course2_put3: this.score.course2_put3,
      course2_olympic3: this.score.course2_olympic3,
      course2_lasvegas3: this.score.course2_lasvegas3,
      course2_score4: this.score.course2_score4,
      course2_put4: this.score.course2_put4,
      course2_olympic4: this.score.course2_olympic4,
      course2_lasvegas4: this.score.course2_lasvegas4,

      course3_no: this.score.course3_no,
      course3_score1: this.score.course3_score1,
      course3_put1: this.score.course3_put1,
      course3_olympic1: this.score.course3_olympic1,
      course3_lasvegas1: this.score.course3_lasvegas1,
      course3_score2: this.score.course3_score2,
      course3_put2: this.score.course3_put2,
      course3_olympic2: this.score.course3_olympic2,
      course3_lasvegas2: this.score.course3_lasvegas2,
      course3_score3: this.score.course3_score3,
      course3_put3: this.score.course3_put3,
      course3_olympic3: this.score.course3_olympic3,
      course3_lasvegas3: this.score.course3_lasvegas3,
      course3_score4: this.score.course3_score4,
      course3_put4: this.score.course3_put4,
      course3_olympic4: this.score.course3_olympic4,
      course3_lasvegas4: this.score.course3_lasvegas4,

      course4_no: this.score.course4_no,
      course4_score1: this.score.course4_score1,
      course4_put1: this.score.course4_put1,
      course4_olympic1: this.score.course4_olympic1,
      course4_lasvegas1: this.score.course4_lasvegas1,
      course4_score2: this.score.course4_score2,
      course4_put2: this.score.course4_put2,
      course4_olympic2: this.score.course4_olympic2,
      course4_lasvegas2: this.score.course4_lasvegas2,
      course4_score3: this.score.course4_score3,
      course4_put3: this.score.course4_put3,
      course4_olympic3: this.score.course4_olympic3,
      course4_lasvegas3: this.score.course4_lasvegas3,
      course4_score4: this.score.course4_score4,
      course4_put4: this.score.course4_put4,
      course4_olympic4: this.score.course4_olympic4,
      course4_lasvegas4: this.score.course4_lasvegas4,

      course5_no: this.score.course5_no,
      course5_score1: this.score.course5_score1,
      course5_put1: this.score.course5_put1,
      course5_olympic1: this.score.course5_olympic1,
      course5_lasvegas1: this.score.course5_lasvegas1,
      course5_score2: this.score.course5_score2,
      course5_put2: this.score.course5_put2,
      course5_olympic2: this.score.course5_olympic2,
      course5_lasvegas2: this.score.course5_lasvegas2,
      course5_score3: this.score.course5_score3,
      course5_put3: this.score.course5_put3,
      course5_olympic3: this.score.course5_olympic3,
      course5_lasvegas3: this.score.course5_lasvegas3,
      course5_score4: this.score.course5_score4,
      course5_put4: this.score.course5_put4,
      course5_olympic4: this.score.course5_olympic4,
      course5_lasvegas4: this.score.course5_lasvegas4,

      course6_no: this.score.course6_no,
      course6_score1: this.score.course6_score1,
      course6_put1: this.score.course6_put1,
      course6_olympic1: this.score.course6_olympic1,
      course6_lasvegas1: this.score.course6_lasvegas1,
      course6_score2: this.score.course6_score2,
      course6_put2: this.score.course6_put2,
      course6_olympic2: this.score.course6_olympic2,
      course6_lasvegas2: this.score.course6_lasvegas2,
      course6_score3: this.score.course6_score3,
      course6_put3: this.score.course6_put3,
      course6_olympic3: this.score.course6_olympic3,
      course6_lasvegas3: this.score.course6_lasvegas3,
      course6_score4: this.score.course6_score4,
      course6_put4: this.score.course6_put4,
      course6_olympic4: this.score.course6_olympic4,
      course6_lasvegas4: this.score.course6_lasvegas4,

      course7_no: this.score.course7_no,
      course7_score1: this.score.course7_score1,
      course7_put1: this.score.course7_put1,
      course7_olympic1: this.score.course7_olympic1,
      course7_lasvegas1: this.score.course7_lasvegas1,
      course7_score2: this.score.course7_score2,
      course7_put2: this.score.course7_put2,
      course7_olympic2: this.score.course7_olympic2,
      course7_lasvegas2: this.score.course7_lasvegas2,
      course7_score3: this.score.course7_score3,
      course7_put3: this.score.course7_put3,
      course7_olympic3: this.score.course7_olympic3,
      course7_lasvegas3: this.score.course7_lasvegas3,
      course7_score4: this.score.course7_score4,
      course7_put4: this.score.course7_put4,
      course7_olympic4: this.score.course7_olympic4,
      course7_lasvegas4: this.score.course7_lasvegas4,

      course8_no: this.score.course8_no,
      course8_score1: this.score.course8_score1,
      course8_put1: this.score.course8_put1,
      course8_olympic1: this.score.course8_olympic1,
      course8_lasvegas1: this.score.course8_lasvegas1,
      course8_score2: this.score.course8_score2,
      course8_put2: this.score.course8_put2,
      course8_olympic2: this.score.course8_olympic2,
      course8_lasvegas2: this.score.course8_lasvegas2,
      course8_score3: this.score.course8_score3,
      course8_put3: this.score.course8_put3,
      course8_olympic3: this.score.course8_olympic3,
      course8_lasvegas3: this.score.course8_lasvegas3,
      course8_score4: this.score.course8_score4,
      course8_put4: this.score.course8_put4,
      course8_olympic4: this.score.course8_olympic4,
      course8_lasvegas4: this.score.course8_lasvegas4,

      course9_no: this.score.course9_no,
      course9_score1: this.score.course9_score1,
      course9_put1: this.score.course9_put1,
      course9_olympic1: this.score.course9_olympic1,
      course9_lasvegas1: this.score.course9_lasvegas1,
      course9_score2: this.score.course9_score2,
      course9_put2: this.score.course9_put2,
      course9_olympic2: this.score.course9_olympic2,
      course9_lasvegas2: this.score.course9_lasvegas2,
      course9_score3: this.score.course9_score3,
      course9_put3: this.score.course9_put3,
      course9_olympic3: this.score.course9_olympic3,
      course9_lasvegas3: this.score.course9_lasvegas3,
      course9_score4: this.score.course9_score4,
      course9_put4: this.score.course9_put4,
      course9_olympic4: this.score.course9_olympic4,
      course9_lasvegas4: this.score.course9_lasvegas4,

      course10_no: this.score.course10_no,
      course10_score1: this.score.course10_score1,
      course10_put1: this.score.course10_put1,
      course10_olympic1: this.score.course10_olympic1,
      course10_lasvegas1: this.score.course10_lasvegas1,
      course10_score2: this.score.course10_score2,
      course10_put2: this.score.course10_put2,
      course10_olympic2: this.score.course10_olympic2,
      course10_lasvegas2: this.score.course10_lasvegas2,
      course10_score3: this.score.course10_score3,
      course10_put3: this.score.course10_put3,
      course10_olympic3: this.score.course10_olympic3,
      course10_lasvegas3: this.score.course10_lasvegas3,
      course10_score4: this.score.course10_score4,
      course10_put4: this.score.course10_put4,
      course10_olympic4: this.score.course10_olympic4,
      course10_lasvegas4: this.score.course10_lasvegas4,

      course11_no: this.score.course11_no,
      course11_score1: this.score.course11_score1,
      course11_put1: this.score.course11_put1,
      course11_olympic1: this.score.course11_olympic1,
      course11_lasvegas1: this.score.course11_lasvegas1,
      course11_score2: this.score.course11_score2,
      course11_put2: this.score.course11_put2,
      course11_olympic2: this.score.course11_olympic2,
      course11_lasvegas2: this.score.course11_lasvegas2,
      course11_score3: this.score.course11_score3,
      course11_put3: this.score.course11_put3,
      course11_olympic3: this.score.course11_olympic3,
      course11_lasvegas3: this.score.course11_lasvegas3,
      course11_score4: this.score.course11_score4,
      course11_put4: this.score.course11_put4,
      course11_olympic4: this.score.course11_olympic4,
      course11_lasvegas4: this.score.course11_lasvegas4,

      course12_no: this.score.course12_no,
      course12_score1: this.score.course12_score1,
      course12_put1: this.score.course12_put1,
      course12_olympic1: this.score.course12_olympic1,
      course12_lasvegas1: this.score.course12_lasvegas1,
      course12_score2: this.score.course12_score2,
      course12_put2: this.score.course12_put2,
      course12_olympic2: this.score.course12_olympic2,
      course12_lasvegas2: this.score.course12_lasvegas2,
      course12_score3: this.score.course12_score3,
      course12_put3: this.score.course12_put3,
      course12_olympic3: this.score.course12_olympic3,
      course12_lasvegas3: this.score.course12_lasvegas3,
      course12_score4: this.score.course12_score4,
      course12_put4: this.score.course12_put4,
      course12_olympic4: this.score.course12_olympic4,
      course12_lasvegas4: this.score.course12_lasvegas4,

      course13_no: this.score.course13_no,
      course13_score1: this.score.course13_score1,
      course13_put1: this.score.course13_put1,
      course13_olympic1: this.score.course13_olympic1,
      course13_lasvegas1: this.score.course13_lasvegas1,
      course13_score2: this.score.course13_score2,
      course13_put2: this.score.course13_put2,
      course13_olympic2: this.score.course13_olympic2,
      course13_lasvegas2: this.score.course13_lasvegas2,
      course13_score3: this.score.course13_score3,
      course13_put3: this.score.course13_put3,
      course13_olympic3: this.score.course13_olympic3,
      course13_lasvegas3: this.score.course13_lasvegas3,
      course13_score4: this.score.course13_score4,
      course13_put4: this.score.course13_put4,
      course13_olympic4: this.score.course13_olympic4,
      course13_lasvegas4: this.score.course13_lasvegas4,

      course14_no: this.score.course14_no,
      course14_score1: this.score.course14_score1,
      course14_put1: this.score.course14_put1,
      course14_olympic1: this.score.course14_olympic1,
      course14_lasvegas1: this.score.course14_lasvegas1,
      course14_score2: this.score.course14_score2,
      course14_put2: this.score.course14_put2,
      course14_olympic2: this.score.course14_olympic2,
      course14_lasvegas2: this.score.course14_lasvegas2,
      course14_score3: this.score.course14_score3,
      course14_put3: this.score.course14_put3,
      course14_olympic3: this.score.course14_olympic3,
      course14_lasvegas3: this.score.course14_lasvegas3,
      course14_score4: this.score.course14_score4,
      course14_put4: this.score.course14_put4,
      course14_olympic4: this.score.course14_olympic4,
      course14_lasvegas4: this.score.course14_lasvegas4,

      course15_no: this.score.course15_no,
      course15_score1: this.score.course15_score1,
      course15_put1: this.score.course15_put1,
      course15_olympic1: this.score.course15_olympic1,
      course15_lasvegas1: this.score.course15_lasvegas1,
      course15_score2: this.score.course15_score2,
      course15_put2: this.score.course15_put2,
      course15_olympic2: this.score.course15_olympic2,
      course15_lasvegas2: this.score.course15_lasvegas2,
      course15_score3: this.score.course15_score3,
      course15_put3: this.score.course15_put3,
      course15_olympic3: this.score.course15_olympic3,
      course15_lasvegas3: this.score.course15_lasvegas3,
      course15_score4: this.score.course15_score4,
      course15_put4: this.score.course15_put4,
      course15_olympic4: this.score.course15_olympic4,
      course15_lasvegas4: this.score.course15_lasvegas4,

      course16_no: this.score.course16_no,
      course16_score1: this.score.course16_score1,
      course16_put1: this.score.course16_put1,
      course16_olympic1: this.score.course16_olympic1,
      course16_lasvegas1: this.score.course16_lasvegas1,
      course16_score2: this.score.course16_score2,
      course16_put2: this.score.course16_put2,
      course16_olympic2: this.score.course16_olympic2,
      course16_lasvegas2: this.score.course16_lasvegas2,
      course16_score3: this.score.course16_score3,
      course16_put3: this.score.course16_put3,
      course16_olympic3: this.score.course16_olympic3,
      course16_lasvegas3: this.score.course16_lasvegas3,
      course16_score4: this.score.course16_score4,
      course16_put4: this.score.course16_put4,
      course16_olympic4: this.score.course16_olympic4,
      course16_lasvegas4: this.score.course16_lasvegas4,

      course17_no: this.score.course17_no,
      course17_score1: this.score.course17_score1,
      course17_put1: this.score.course17_put1,
      course17_olympic1: this.score.course17_olympic1,
      course17_lasvegas1: this.score.course17_lasvegas1,
      course17_score2: this.score.course17_score2,
      course17_put2: this.score.course17_put2,
      course17_olympic2: this.score.course17_olympic2,
      course17_lasvegas2: this.score.course17_lasvegas2,
      course17_score3: this.score.course17_score3,
      course17_put3: this.score.course17_put3,
      course17_olympic3: this.score.course17_olympic3,
      course17_lasvegas3: this.score.course17_lasvegas3,
      course17_score4: this.score.course17_score4,
      course17_put4: this.score.course17_put4,
      course17_olympic4: this.score.course17_olympic4,
      course17_lasvegas4: this.score.course17_lasvegas4,

      course18_no: this.score.course18_no,
      course18_score1: this.score.course18_score1,
      course18_put1: this.score.course18_put1,
      course18_olympic1: this.score.course18_olympic1,
      course18_lasvegas1: this.score.course18_lasvegas1,
      course18_score2: this.score.course18_score2,
      course18_put2: this.score.course18_put2,
      course18_olympic2: this.score.course18_olympic2,
      course18_lasvegas2: this.score.course18_lasvegas2,
      course18_score3: this.score.course18_score3,
      course18_put3: this.score.course18_put3,
      course18_olympic3: this.score.course18_olympic3,
      course18_lasvegas3: this.score.course18_lasvegas3,
      course18_score4: this.score.course18_score4,
      course18_put4: this.score.course18_put4,
      course18_olympic4: this.score.course18_olympic4,
      course18_lasvegas4: this.score.course18_lasvegas4,
    });
    console.warn('Your order has been submitted', this.checkoutForm);

    this.activatedRoute.paramMap.subscribe(params => {

      const scoreObservable = this.scoreService.saveScore(params.get("scoreId")!, this.checkoutForm)

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

  cngDropDown1_1(){
    this.score.course1_olympic1 = this.dropDown1_1
  }
  cngDropDown1_2(){
    this.score.course1_olympic2 = this.dropDown1_2
  }
  cngDropDown1_3(){
    this.score.course1_olympic3 = this.dropDown1_3
  }
  cngDropDown1_4(){
    this.score.course1_olympic4 = this.dropDown1_4
  }
  cngDropDown2_1(){
    this.score.course2_olympic1 = this.dropDown2_1
  }
  cngDropDown2_2(){
    this.score.course2_olympic2 = this.dropDown2_2
  }
  cngDropDown2_3(){
    this.score.course2_olympic3 = this.dropDown2_3
  }
  cngDropDown2_4(){
    this.score.course2_olympic4 = this.dropDown2_4
  }

  cngRdioBtn1_1(){
    this.score.course1_lasvegas1 = this.radioBtn1_1
  }
  cngRdioBtn1_2(){
    this.score.course1_lasvegas2 = this.radioBtn1_2
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

  doSubmit(){}
}
