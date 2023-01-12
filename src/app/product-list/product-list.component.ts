import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Product 1',
      price: 1000
    }, {
      name: 'Product 2',
      price: 67
    }, {
      name: 'Product 3',
      price: 600
    }, {
      name: 'Product 4',
      price: 400
    }
  ]
}
