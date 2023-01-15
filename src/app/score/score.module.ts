import { ScoreComponent } from './score.component';
import { ScoreeditComponent } from './scoreedit/scoreedit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { ScorelisttopComponent } from './scorelisttop/scorelisttop.component';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'score', component: ScoreComponent,
    children: [
     { path: '', component: ScorelisttopComponent },
     { path: ':scoreId', component: ScorelistComponent },
     { path: ':scoreId/scoreedit', component: ScoreeditComponent },
     { path: 'scorelisttop', component: ScorelisttopComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ScoreComponent,
    ScoreeditComponent,
    ScorelistComponent,
    ScorelisttopComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    CommonModule,
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class ScoreModule { }
