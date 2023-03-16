import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/persons.model'


@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})

export class ListAddComponent {
  @Output() outPerson = new EventEmitter<Task>
  name: string;
  lastName: string;

  constructor() {
    this.name = 'Sergio';
    this.lastName = 'Freire';
  }

  sendPerson() {
    let person = new Task(this.name, this.lastName);
    this.outPerson.emit(person);
  }
}

