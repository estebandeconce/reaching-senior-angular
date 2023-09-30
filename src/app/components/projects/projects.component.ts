import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  myVar: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myVar = this.activateRoute.params['employeeId'];
  }
}
