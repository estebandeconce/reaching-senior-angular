import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent {
  @Output('myEvent') evEmitter = new EventEmitter();

  titleClickedEvent() {
    this.evEmitter.emit('You have clicked this title!');
  }
}
