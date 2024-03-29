import {Component, OnInit} from '@angular/core';
import {PacientesService} from "../../../pacientes/service/pacientes.service";
import {Paciente} from "../../../pacientes/model/paciente";
import {Observable} from "rxjs";

@Component({
  selector: 'app-d-pacientes',
  templateUrl: './d-pacientes.component.html',
  styleUrls: ['./d-pacientes.component.css']
})
export class DPacientesComponent implements OnInit{
    public listaPaciente!: Paciente[];
    constructor(private pacientesService:PacientesService) {
    }

    ngOnInit(): void {
       this.pacientesService.getPacientes().subscribe(
         pacientes => this.listaPaciente=pacientes
       );
    }


}
