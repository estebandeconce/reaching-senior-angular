import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  formG: FormGroup;

  constructor() {
    this.formG = new FormGroup({
      age: new FormControl('', [
        this.legalAge
      ]),
      dni: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/)
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    })
  }

  onSubmit(formGroup: FormGroup) {

  }

  legalAge(control) {
    const age = control.value;
    const MIN = 18;
    const error = age < MIN ? { legalAge: 'You must be at least 18 years old to register.' } : null;
    return error;
  }

}
