import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestApplyPage } from './rest-apply.page';

const routes: Routes = [
  {
    path: '',
    component: RestApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestApplyPageRoutingModule {}
