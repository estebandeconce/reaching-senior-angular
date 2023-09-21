import { Component, EventEmitter, Output, Pipe } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})

export class FoodAddComponent {

  @Output() productAdded: EventEmitter<Product>

  productList: Product[];
  foodName: string;
  foodQuantity: number;
  foodDepartment: string;

  departments: Department[] = [Department.MEATS, Department.SWEETS, Department.SALTS, Department.DRINKS];

  constructor() {
    this.productAdded = new EventEmitter();
    this.productList = [];
    this.foodQuantity = 1;
  }

  addFood(foodName: string, foodQuantity: number, foodDepartment: string) {
    let product: Product = new Product(foodName, foodQuantity);
    switch (foodDepartment) {
      case 'CARNES':
        product.department = Department.MEATS;
        break;
      case 'DULCES':
        product.department = Department.SWEETS;
        break;
      case 'SALADOS':
        product.department = Department.SALTS;
        break;
      case 'TRAGOS':
        product.department = Department.DRINKS;
        break;
      default:
        throw new Error('Invalid department');
    }
    this.productAdded.emit(product);
  }
}
