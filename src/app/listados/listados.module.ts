import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { ListadosRoutingModule } from './listados-routing.module'


@NgModule({
  declarations: [
    PeliculasComponent,
    PlanetasComponent,
    DescripcionComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule
  ]
})
export class ListadosModule { }
