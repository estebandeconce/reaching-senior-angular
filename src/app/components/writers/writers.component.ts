import { Component } from '@angular/core';
import { WRITERS } from 'src/app/mocks/writers.mock';
import { Writer } from 'src/app/models/writer.model';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent {
  arrWriters: Writer[];

  constructor() {
    this.arrWriters = [];
  }

  ngOnInit() {
    this.arrWriters = WRITERS;
  }
}
