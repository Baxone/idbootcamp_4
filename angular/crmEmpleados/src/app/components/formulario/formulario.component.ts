import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  departamentos: Departamento[];
  constructor(
    private departamentosServices: DepartamentosService,
    private empleadosServices: EmpleadosService
  ) {
    this.departamentos = []
  }

  ngOnInit(): void {
    //cuando carguemos el form rellenamos el selector de departamentos haciendo un consulta al servicio de departamentos.
    this.departamentos = this.departamentosServices.getAll()

  }

  getDataForm(pForm: any) {
    pForm.value.department = Number(pForm.value.department)
    // los datos del formulario hay que enviarlos al servicio al del empleados
    let msg = this.empleadosServices.insertEmployee(pForm.value)
    if (msg === "Usuario registrado correctamente") {
      //entonces actualizo el departamento
    }
    alert(msg);
    //habria que actulizar el array de departementos le numero de empleados.
    pForm.resetForm({ department: "" })

  }

  //lo primero: llenar el selector con todos los departamentos, para ello consultaremos al servicio de departamente pidendole todos los departamentos.

}
