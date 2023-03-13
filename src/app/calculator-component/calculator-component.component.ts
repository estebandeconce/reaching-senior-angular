import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent {
  operation: string;
  operator: any;

  constructor() {
    this.operation = '30';
  }

  writerToOperate($event) {
    this.operator = $event.target.innerText;
    this.operation = this.operation + this.operator.toString();
  }

  operate() {
    this.operation = eval(this.operation);
  }
}
