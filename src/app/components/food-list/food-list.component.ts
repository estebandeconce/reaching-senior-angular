import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  @Input() foodList: Product[];
  @Input() isOnCart: boolean;
  @Output() productBought: EventEmitter<Product>;

  constructor() {
    this.productBought = new EventEmitter();
  }

  eraseFood(index: number): void {
    this.foodList.splice(index, 1);
  }

  buyProduct(product: Product): void {
    this.productBought.emit(product)
  }
}
