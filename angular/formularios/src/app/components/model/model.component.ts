import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
        this.ageValidator
      ]),
      mail: new FormControl('', [
        // pattern valida expresiones regulares
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      type: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ]),
      repeatpassword: new FormControl('', []),
    }, [this.passwordValidator])
  }

  passwordValidator(pForm: AbstractControl) {
    const password = pForm.get('password')?.value;
    const repeatpassword = pForm.get('repeatpassword')?.value;

    if (password !== repeatpassword) {
      return { passwordvalidator: true }
    }

    return null
  }




  ngOnInit(): void {
  }

  dniValidator(pControlName: AbstractControl) {
    //intentar validar el dni que este bien escrito y que letra concuerde.
    return null
  }


  ageValidator(pControlName: AbstractControl) {
    //el controlName es objeto del campo que valido (age) y me sirve para obtener el value del campo.
    //OJO no deis por hecho que si el campo es de tipo de number devuelva un numero.
    const edad: number = parseInt(pControlName.value)

    //es mayor 18 y menor 65
    //es edad un numero
    if (isNaN(edad)) {
      return { agevalidator: 'La edad tiene que ser un numero' }
    } else if (edad < 18 || edad > 65) {
      return { agevalidator: 'La edad tiene que ser entre 18 y 65 años' }
    }

    return null
  }


  getDataForm() {
    console.log(this.modelForm.value)

  }

  checkControl(pControlName: string, pErrorName: string): boolean {
    if (this.modelForm.get(pControlName)?.hasError(pErrorName) && this.modelForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
