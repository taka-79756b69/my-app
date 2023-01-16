import { ScoreComponent } from './score.component';
import { ScoreeditComponent } from './scoreedit/scoreedit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { ScorelisttopComponent } from './scorelisttop/scorelisttop.component';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'score', component: ScoreComponent,
    children: [
     { path: '', component: ScorelisttopComponent },
     { path: ':scoreId', component: ScorelistComponent },
     { path: ':scoreId/:courseIndex', component: ScoreeditComponent },
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
    FormsModule,
    CommonModule,
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class ScoreModule { }
