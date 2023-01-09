import { Component } from '@angular/core';
import { products } from 'src/app/product';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  products: any

  ngOnInit(): void {
    this.products = products;
  }
}
