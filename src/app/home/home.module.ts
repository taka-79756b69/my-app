import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { NewgameComponent } from '../newgame/newgame.component';

const routes: Routes = [
  {
    path: 'newgame', component: HomeComponent,
    children: [
     { path: 'newgame', component: NewgameComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NewgameComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class HomeModule { }
