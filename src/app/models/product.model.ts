import { Department } from './department.model'

export class Product {
  name: string;
  quantity: number;
  department: Department;

  constructor(name?: string, quantity: number = 0, department: Department = Department.UNASIGNED) {
    this.name = name;
    this.quantity = quantity;
    this.department = department;
  }
}
