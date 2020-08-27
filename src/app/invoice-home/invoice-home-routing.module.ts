import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceHomePage } from './invoice-home.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceHomePageRoutingModule {}
