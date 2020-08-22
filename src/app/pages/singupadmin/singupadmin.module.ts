import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupadminPageRoutingModule } from './singupadmin-routing.module';

import { SingupadminPage } from './singupadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupadminPageRoutingModule
  ],
  declarations: [SingupadminPage]
})
export class SingupadminPageModule {}
