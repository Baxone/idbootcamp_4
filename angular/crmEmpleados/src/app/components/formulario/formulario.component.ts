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

  getDataForm(pForm: any): boolean {
    pForm.value.department = Number(pForm.value.department)
    // los datos del formulario hay que enviarlos al servicio al del empleados
    if (pForm.value.name === "" || pForm.value.surname === "" || pForm.value.email === "" || pForm.value.dni === "" || pForm.value.photo === "" || pForm.value.department === 0) {
      alert('Todos campos son obligatorios');
      return false;
    }

    let response: any = this.empleadosServices.insertEmployee(pForm.value)
    if (response.status) {
      //entonces actualizo el departamento
      let departamento: Departamento = this.departamentosServices.updateNumEmployees(pForm.value.department);
      console.log(departamento)
    }
    alert(response.msg);
    //habria que actulizar el array de departementos le numero de empleados.
    pForm.resetForm({ department: "" })
    return true
  }

  //lo primero: llenar el selector con todos los departamentos, para ello consultaremos al servicio de departamente pidendole todos los departamentos.

}
