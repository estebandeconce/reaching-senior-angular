import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../models/persons.model'


@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})

export class ListAddComponent {
  @Output() outPerson = new EventEmitter<Person>
  name: string;
  lastName: string;

  constructor() {
    this.name = 'Sergio';
    this.lastName = 'Freire';
  }

  sendPerson() {
    let person = new Person(this.name, this.lastName);
    this.outPerson.emit(person);
  }
}

