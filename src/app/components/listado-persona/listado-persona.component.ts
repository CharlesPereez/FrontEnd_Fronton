import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css'],
})
export class ListadoPersonaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nombres',
    'apellidos',
    'ciPersona',
    'genero',
    'fechaNacimiento',
    'direccion',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Persona>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _snackBar: MatSnackBar,
    private _personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por página';
    }
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerPersonas() {
    this.loading = true;
    this._personaService.getPersonas().subscribe((data) => {
        this.loading = false;
        this.dataSource.data = data;
      });
  }

  eliminarPersona(PersonaId: number) {
    this.loading = true;

    this._personaService.eliminarPersona(PersonaId).subscribe(() =>{
      this.mensajeExito();
      this.loading = false; 
      this.obtenerPersonas();   
    })

    
  }
  mensajeExito(){
    this._snackBar.open('El cliente fue eliminado con éxito', '', {
      duration: 1000,
      horizontalPosition: 'right',
    });
  }
}
