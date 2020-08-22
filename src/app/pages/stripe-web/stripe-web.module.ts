import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { StripeWebPageRoutingModule } from './stripe-web-routing.module';

// import { StripeWebPage } from '../stripe-web/stripe-web.page';
import { StripePage } from '../stripe/stripe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: StripePage
      }
    ]),
    StripeWebPageRoutingModule,
  ],
  declarations: [StripePage]
})
export class StripeWebPageModule {}
