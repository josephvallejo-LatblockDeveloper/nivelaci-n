import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { ListadosRoutingModule } from './listados-routing.module'

//material
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    PeliculasComponent,
    PlanetasComponent,
    DescripcionComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class ListadosModule { }
