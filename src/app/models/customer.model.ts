export class Customer {
  name: string;
  lastName: string;
  age: number;
  isActive: boolean;

  constructor(name: string, lastName: string, age: number, isActive: boolean) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isActive = isActive;
  }
}
