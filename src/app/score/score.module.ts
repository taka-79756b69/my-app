import { ScoreComponent } from './score.component';
import { ScoreeditComponent } from './scoreedit/scoreedit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScorelistComponent } from './scorelist/scorelist.component';

const routes: Routes = [
  {
    path: 'score', component: ScoreComponent,
    children: [
     { path: '', component: ScorelistComponent },
     { path: 'scoreedit', component: ScoreeditComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ScoreComponent,
    ScoreeditComponent,
    ScorelistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ScoreModule { }
