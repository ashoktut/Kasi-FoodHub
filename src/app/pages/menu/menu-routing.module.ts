import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path:'signup', loadChildren:'../pages/signup/signup.module'},
      { path: 'home', loadChildren: '../home/home.module'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
