import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  onSubmit(formData: any) {
    console.log('Email:', formData.email);
    console.log('Name:', formData.name);
    console.log('Age:', formData.age);
    console.log(formData);
  }
}
