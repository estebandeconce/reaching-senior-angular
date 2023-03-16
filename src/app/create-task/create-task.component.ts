import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/persons.model'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() sendTask = new EventEmitter<Task>
  taskName: string;
  taskDescription: string;

  createTask() {
    let task = new Task(this.taskName, this.taskDescription)
    this.sendTask.emit(task);
  }
}


