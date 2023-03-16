export class Task {
  title: string;
  description: string;
  isCompleted: boolean;

  constructor(title: string = '', description: string = '', isCompleted: boolean = false) {
    this.title = title;
    this.description = description;
  }
}