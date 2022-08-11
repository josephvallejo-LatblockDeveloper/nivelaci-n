import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listados',
    loadChildren: () => import('./listados/listados.module').then(m => m.ListadosModule)
  },
  {
    path: '**',
    redirectTo: 'listados'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
