import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesPrincipalComponent } from './paginas/pacientes-principal/pacientes-principal.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PacientesPrincipalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PacientesModule { }
