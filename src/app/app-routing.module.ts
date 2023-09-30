import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'employees/:employeeId', component: DetailEmployeeComponent, children: [
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsComponent },
    ]
  },
  { path: 'info', component: InfoComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
