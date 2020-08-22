import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorMenu3PageRoutingModule } from './vendor-menu3-routing.module';

import { VendorMenu3Page } from './vendor-menu3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorMenu3PageRoutingModule
  ],
  declarations: [VendorMenu3Page]
})
export class VendorMenu3PageModule {}
