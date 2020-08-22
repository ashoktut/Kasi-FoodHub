import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupcustPageRoutingModule } from './singupcust-routing.module';

import { SingupcustPage } from './singupcust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupcustPageRoutingModule
  ],
  declarations: [SingupcustPage]
})
export class SingupcustPageModule {}
