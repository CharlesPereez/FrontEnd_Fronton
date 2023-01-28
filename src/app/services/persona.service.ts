import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/persona/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getPersona(PersonaId: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.myAppUrl}${this.myApiUrl}${PersonaId}`);
  }

  eliminarPersona(PersonaId: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${PersonaId}`)
  }
}
