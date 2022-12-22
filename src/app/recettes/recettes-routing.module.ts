import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesPage } from './recettes.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesPage
  },
  {
    path: 'detail-recette/:id',
    loadChildren: () => import('./detail-recette/detail-recette.module').then( m => m.DetailRecettePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPageRoutingModule {}
