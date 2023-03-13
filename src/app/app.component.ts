import { Component } from '@angular/core';
import { Person } from './models/persons.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrPersons: Person[] = [];

  contructor() {
  }

  receivePerson($event) {
    this.arrPersons.push($event)
  }
}
