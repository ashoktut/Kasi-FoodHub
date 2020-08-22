import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorMenu1Page } from './vendor-menu1.page';

const routes: Routes = [
  {
    path: '',
    component: VendorMenu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorMenu1PageRoutingModule {}
