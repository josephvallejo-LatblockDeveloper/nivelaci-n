import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {PeliculasComponent} from './pages/peliculas/peliculas.component';
import {DescripcionComponent} from './pages/descripcion/descripcion.component'
import {PlanetasComponent} from './pages/planetas/planetas.component'

const routes: Routes =[
  {
    path: '',
    children: [
      {path: 'peliculas', component: PeliculasComponent},
      {path: 'peliculas/descripcion', component: DescripcionComponent},
      {path: 'planetas', component: PlanetasComponent},
      {path: '**', redirectTo: 'peliculas'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ListadosRoutingModule { }
