import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranglivestreamRoutingModule } from './tranglivestream-routing.module';
import { TranglivestreamComponent } from './tranglivestream.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TranglivestreamComponent
  ],
  imports: [
    CommonModule,
    TranglivestreamRoutingModule,SharedModule
  ]
})
export class TranglivestreamModule { }
