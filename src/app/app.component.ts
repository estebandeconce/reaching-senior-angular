import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfFood: Product[];
  listOfDrinks: Product[];

  productsSelectedArray: Product[];

  constructor() {
    this.productsSelectedArray = [];

    this.listOfFood = [
      new Product('Fries', 'https://cache-mcd-ecommerce.appmcdonalds.com/images/CL/380.png', 5000),
      new Product('Burger', 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXwtjrN/200/200/original?country=cl', 6000),
      new Product('Taco', 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$mc-burrito-a-la-mexican.png/200/200/original?country=mx', 7000),
    ];

    this.listOfDrinks = [
      new Product('Soda', 'https://cache-mcd-ecommerce.appmcdonalds.com/images/CL/380.png', 5000),
      new Product('Beer', 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXwtjrN/200/200/original?country=cl', 6000),
      new Product('Wine', 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$mc-burrito-a-la-mexican.png/200/200/original?country=mx', 7000),
    ];
  }

  clickProduct(product: Product) {
    const productFinded = this.productsSelectedArray.find(p => p.name === product.name);
    if (productFinded) {
      productFinded.quantity++;
    } else {
      product.quantity = 1;
      this.productsSelectedArray.push(product);
    }
  }
}
