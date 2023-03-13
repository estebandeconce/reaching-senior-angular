import { Component } from '@angular/core';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {
  number1: number;
  number2: number;
  result: number;

  constructor() {
    this.number1 = 10;
    this.number2 = 10;
    this.result = 0;
  }

  clickToAdd() {
    this.result = this.number1 + this.number2;
  }

}
