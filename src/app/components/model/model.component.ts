import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  formG: FormGroup;

  constructor() {
    this.formG = new FormGroup({
      age: new FormControl(''),
      dni: new FormControl(''),
      email: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    })
  }

  onSubmit(formGroup: FormGroup) {

  }
}
