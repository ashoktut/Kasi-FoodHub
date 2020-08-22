import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Order2PageRoutingModule } from './order2-routing.module';

import { Order2Page } from './order2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Order2PageRoutingModule
  ],
  declarations: [Order2Page]
})
export class Order2PageModule {}
