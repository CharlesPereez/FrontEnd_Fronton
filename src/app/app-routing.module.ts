import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';

// Componentes
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'listPersona', pathMatch: 'full'},
  {path: 'listPersona', component: ListadoPersonaComponent},
  {path: 'agregarPersona', component: AgregarEditarPersonaComponent},
  {path: 'verPersona/:id', component: VerPersonaComponent},  
  {path: 'editarPersona/:id', component: AgregarEditarPersonaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'listPersona', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
