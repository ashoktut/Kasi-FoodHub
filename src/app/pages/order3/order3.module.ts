import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Order3PageRoutingModule } from './order3-routing.module';

import { Order3Page } from './order3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Order3PageRoutingModule
  ],
  declarations: [Order3Page]
})
export class Order3PageModule {}
