import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable()

export class CustomersService {

  customers: Customer[];

  constructor() {
    this.customers = [
      new Customer('Sergio', 'Freire', 25, false),
      new Customer('Rodrigo', 'Salinas', 30, false),
      new Customer('Alice', 'Smith', 25, false),
      new Customer('Bob', 'Jones', 30, true),
      new Customer('Carol', 'Williams', 25, true),
      new Customer('Dave', 'Brown', 30, true),
      new Customer('Eve', 'Johnson', 25, true),
      new Customer('Maria', 'Garcia', 30, true),
      new Customer('Pedro', 'Sánchez', 25, true),
      new Customer('Juan', 'López', 30, true),
    ];
  }

  getAll(): Customer[] {
    return this.customers;
  }

  /* getActiveCustomers(): Customer[] {
    return this.customers.filter(customer => customer.isActive)
  } */

  createCustomer(name: string, lastName: string, age: number, isActive: boolean): void {
    let customer = new Customer(name, lastName, age, isActive);
    this.customers.push(customer);
  }

  getActiveCustomers(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
      resolve(this.customers.filter(customer => customer.isActive));
    });
  }
}
