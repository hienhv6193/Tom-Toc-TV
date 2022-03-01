import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobaRoutingModule } from './moba-routing.module';
import { MobaComponent } from './moba.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MobaComponent
  ],
  imports: [
    CommonModule,
    MobaRoutingModule,
    SharedModule
  ]
})
export class MobaModule { }
