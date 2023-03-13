import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  myText: string;

  constructor() {
    this.myText = 'my initial text';
  }

  printTextOnConsole(): void {
    console.log(this.myText);
  }
}
