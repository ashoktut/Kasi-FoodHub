import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupadminPage } from './singupadmin.page';

const routes: Routes = [
  {
    path: '',
    component: SingupadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupadminPageRoutingModule {}
