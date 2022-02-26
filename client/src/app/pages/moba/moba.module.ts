import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobaRoutingModule } from './moba-routing.module';
import { MobaComponent } from './moba.component';


@NgModule({
  declarations: [
    MobaComponent
  ],
  imports: [
    CommonModule,
    MobaRoutingModule
  ]
})
export class MobaModule { }
