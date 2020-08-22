import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Order3Page } from './order3.page';

const routes: Routes = [
  {
    path: '',
    component: Order3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Order3PageRoutingModule {}
