import { Component } from '@angular/core';
import { ScoreService } from '../common/service/score.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  show:any

  ngOnInit(): void {

    this.show = true
  }

  onSubmit(): void{

  }
}
