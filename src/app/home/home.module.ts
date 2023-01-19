import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class HomeModule { }
