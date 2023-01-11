import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  products: any

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    const productsObservable = this.productService.getProducts()

    productsObservable.subscribe(
      (data)=>{
        this.products = data
        console.log('got data: '+ data)
      },
      (err)=>{
        console.log('got err: '+ err)
      },
      ()=>{
        console.log('complete!')
      }
    )
  }
}
