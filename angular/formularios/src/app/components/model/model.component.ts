import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  modelForm: FormGroup;

  constructor() {
    this.modelForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      age: new FormControl('', [
        // pattern valida expresiones regulares
        Validators.pattern()
      ]),
      mail: new FormControl('', []),
      dni: new FormControl('', []),
      type: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ]),
      repeatpassword: new FormControl('', []),
    }, [])
  }

  ngOnInit(): void {
  }


  getDataForm() {
    console.log(this.modelForm.value)
  }

}
