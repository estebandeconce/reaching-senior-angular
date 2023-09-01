import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  @Input() title: string;
  @Input() products: Product[];

  @Output() productSelected: EventEmitter<Product>;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  sendProduct(product: Product) {
    this.productSelected.emit(product);
  }



}
