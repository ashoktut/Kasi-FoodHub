import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupcustPage } from './singupcust.page';

const routes: Routes = [
  {
    path: '',
    component: SingupcustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupcustPageRoutingModule {}
