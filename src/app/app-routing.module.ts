import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ScoreModule } from './score/score.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  // { path: 'detail', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    ScoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
