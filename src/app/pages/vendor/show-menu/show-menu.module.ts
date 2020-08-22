import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMenuPageRoutingModule } from './show-menu-routing.module';

import { ShowMenuPage } from './show-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMenuPageRoutingModule
  ],
  declarations: [ShowMenuPage]
})
export class ShowMenuPageModule {}
