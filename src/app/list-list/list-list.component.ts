import { Component, Input } from '@angular/core';
import { Task } from '../models/persons.model'

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})

export class ListListComponent {
  @Input() arrPersons: Task[] = [];

  eraseLastPerson() {
    this.arrPersons.pop();
  }
}


