import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css']
})
export class VerPersonaComponent implements OnInit{
    id : number;
    persona!: Persona;
    loading: boolean = false;
  /**
   *
   */
  constructor(private _personaService: PersonaService,
    private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void{
    this.obtenerPersona();
  }

  obtenerPersona(){
    this.loading = true;
    this._personaService.getPersona(this.id).subscribe(data => {
      this.persona = data;
      this.loading = false;
    })
  }

}
