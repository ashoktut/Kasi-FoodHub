import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorMenu1PageRoutingModule } from './vendor-menu1-routing.module';

import { VendorMenu1Page } from './vendor-menu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorMenu1PageRoutingModule
  ],
  declarations: [VendorMenu1Page]
})
export class VendorMenu1PageModule {}
