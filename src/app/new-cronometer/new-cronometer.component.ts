import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-cronometer',
  templateUrl: './new-cronometer.component.html',
  styleUrls: ['./new-cronometer.component.css']
})
export class NewCronometerComponent {
  @Input() countdown: number;
  @Output() myEvent = new EventEmitter();
  countdownCopy: number;

  ngOnInit() {
    this.countdownCopy = this.countdown;
  }

  initCountdown() {
    let myCronometer = setInterval(() => {
      this.countdown--;
    }, 1000);

    setTimeout(() => {
      clearInterval(myCronometer);
      this.countdown = this.countdownCopy;
      console.log(`Han pasado ${this.countdownCopy} segundos`);
      this.myEvent.emit(`Han pasado ${this.countdownCopy} segundos en el evento uwu`);
    }, this.countdownCopy * 1000);
  }
}
