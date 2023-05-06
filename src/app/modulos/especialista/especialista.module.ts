import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistaPrincipalComponent } from './paginas/especialista-principal/especialista-principal.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EspecialistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EspecialistaModule { }
