import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RessetpasswordPageRoutingModule } from './ressetpassword-routing.module';

import { RessetpasswordPage } from './ressetpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RessetpasswordPageRoutingModule
  ],
  declarations: [RessetpasswordPage]
})
export class RessetpasswordPageModule {}
