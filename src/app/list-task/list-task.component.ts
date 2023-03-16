import { Component } from '@angular/core';
import { Task } from '../models/persons.model'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  arrTask: Task[] = [];
  isCompleted: boolean = false;

  addTask($event: Task) {
    console.log('Task recivied: ' + JSON.stringify($event));
    this.arrTask.push($event);
  }

  removeTask(index: number) {
    this.arrTask.splice(index, 1);
  }

}
