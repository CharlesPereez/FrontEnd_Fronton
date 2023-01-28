import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css'],
})
export class AgregarEditarPersonaComponent {
  loading: boolean = false;
  form: FormGroup;
  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      ciPersona: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  agregarPersona() {
    const nombres = this.form.value.nombres;

    const persona: Persona = {
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      ciPersona: this.form.value.ciPersona,
      genero: this.form.value.genero,
      fechaNacimiento: this.form.value.fechaNacimiento,
      direccion: this.form.value.direccion,
    };
    console.log(persona);
  }
}
