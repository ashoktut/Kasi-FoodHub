import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Order2Page } from './order2.page';

const routes: Routes = [
  {
    path: '',
    component: Order2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Order2PageRoutingModule {}
