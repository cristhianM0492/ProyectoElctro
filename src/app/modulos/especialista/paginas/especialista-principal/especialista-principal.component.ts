import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-especialista-principal',
  templateUrl: './especialista-principal.component.html',
  styleUrls: ['./especialista-principal.component.css']
})
export class EspecialistaPrincipalComponent {
  usuarioForm: FormGroup;

  constructor(){
    this.usuarioForm = new FormGroup({
      correo: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      contrasenia: new FormControl<string>('', Validators.required)
    });
  }

  entrar(){
    console.log(this.usuarioForm.get('correo')?.value)
    console.log(this.usuarioForm.get('contrasenia')?.value)
  }
}
