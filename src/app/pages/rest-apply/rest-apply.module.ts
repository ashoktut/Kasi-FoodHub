import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestApplyPageRoutingModule } from './rest-apply-routing.module';

import { RestApplyPage } from './rest-apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestApplyPageRoutingModule
  ],
  declarations: [RestApplyPage]
})
export class RestApplyPageModule {}
