import { Component } from '@angular/core';

@Component({
  selector: 'app-salute-component',
  templateUrl: './salute-component.component.html',
  styleUrls: ['./salute-component.component.css']
})
export class SaluteComponentComponent {
  salute: string;
  idParagraph: string;

  constructor() {
    this.salute = 'Hi, this is the salute component';
    this.idParagraph = 'mainParagraph'
  }

  consoleSalute() {
    console.log('Helllo, world!');
  }
}
