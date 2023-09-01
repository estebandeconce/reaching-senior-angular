import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  @Input() foodList: Product[];

  constructor() {

  }

  removeProduct(id: number) {
    this.foodList[id].quantity === 1 ? this.foodList.splice(id, 1) : this.foodList[id].quantity--;
  }

  totalInvoice() {
    let total: number = 0;
    this.foodList.forEach(food => total += food.price * food.quantity);
    return total;
  }
}
