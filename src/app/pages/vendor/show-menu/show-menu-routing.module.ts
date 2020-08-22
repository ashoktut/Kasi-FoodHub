import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMenuPage } from './show-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMenuPageRoutingModule {}
