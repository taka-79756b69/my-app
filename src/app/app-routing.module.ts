import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreModule } from './score/score.module';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: 'score', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ScoreModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
