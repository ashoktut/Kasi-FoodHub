import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustprofPageRoutingModule } from './custprof-routing.module';

import { CustprofPage } from './custprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustprofPageRoutingModule
  ],
  declarations: [CustprofPage]
})
export class CustprofPageModule {}
