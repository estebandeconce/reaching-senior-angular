import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers: [CustomersService],
})
export class CustomersListComponent {

  arrCustomers: Customer[];

  constructor(private customersService: CustomersService) {
    this.arrCustomers = [];
  }

  ngOnInit() {
    this.arrCustomers = this.customersService.getAll();
  }

  async showActiveCustomers() {
    try {
      this.arrCustomers = await this.customersService.getActiveCustomers();
    } catch (error) {
      console.log(error);
    }
  }
}
