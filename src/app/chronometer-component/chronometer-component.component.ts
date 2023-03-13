import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chronometer-component',
  templateUrl: './chronometer-component.component.html',
  styleUrls: ['./chronometer-component.component.css']
})
export class ChronometerComponentComponent {
  timer: number;

  constructor() {
    this.timer = 10;
  }

  clickToCountdown() {
    this.timer = 10;

    let countdown = setInterval(() =>
      this.timer > 0 ? this.timer-- : undefined, 1000)

    setTimeout(() => {
      clearInterval(countdown);
    }, 10000);
  }

}
