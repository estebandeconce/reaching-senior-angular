import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productsList: Product[];
  shopList: Product[];

  constructor() {
    this.productsList = [];
    this.shopList = [];
  }

  onProductAdded(product: Product) {
    this.productsList.push(product);
  }

  onProductBought(product: Product) {
    this.shopList.push(product);
  }
}
