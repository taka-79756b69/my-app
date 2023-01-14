import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ScoreModule } from './score/score.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    ScoreModule,
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
