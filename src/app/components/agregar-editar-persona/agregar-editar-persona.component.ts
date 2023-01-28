import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css'],
})
export class AgregarEditarPersonaComponent {
  loading: boolean = false;
  form: FormGroup;
  PersonaId : number;
  operacion : string = 'Agregar';
  /**
   *
   */
  constructor(private fb: FormBuilder,
    private _personaService : PersonaService,
    private _snackBar: MatSnackBar,
    private router : Router,
    private aRoute : ActivatedRoute) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      ciPersona: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
    });
    this.PersonaId = Number(this.aRoute.snapshot.paramMap.get('PersonaId'));
  }

  ngOnInit(): void{
    if (this.PersonaId != 0) {
      this.operacion = 'Editar';
    }
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

    //Enviamos objeto al BackEnd
    this._personaService.agregarPersona(persona).subscribe( data =>{
      this.mensajeExito(); 
      this.router.navigate(['/listPersonas'])     
    })   
  }

  mensajeExito(){
    this._snackBar.open('El cliente fue registrado con éxito', '', {
      duration: 1000,
      horizontalPosition: 'right',
    });
  }
}
