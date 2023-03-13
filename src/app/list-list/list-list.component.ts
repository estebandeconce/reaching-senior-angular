import { Component, Input } from '@angular/core';
import { Person } from '../models/persons.model'

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})

export class ListListComponent {
  @Input() arrPersons: Person[] = [];

  eraseLastPerson() {
    this.arrPersons.pop();
  }
}


