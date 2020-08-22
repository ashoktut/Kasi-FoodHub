import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    /*FormGroup,*/
    ReactiveFormsModule,
    IonicModule,
    CheckoutPageRoutingModule
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
