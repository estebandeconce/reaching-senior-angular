import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent {
  @Input('n1') num1: number;
  @Input('n2') num2: number;
  result: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }

  addFunction() {
    this.result = this.num1 + this.num2;
  }

}
