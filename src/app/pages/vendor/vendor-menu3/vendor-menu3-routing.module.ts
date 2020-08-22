import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorMenu3Page } from './vendor-menu3.page';

const routes: Routes = [
  {
    path: '',
    component: VendorMenu3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorMenu3PageRoutingModule {}
