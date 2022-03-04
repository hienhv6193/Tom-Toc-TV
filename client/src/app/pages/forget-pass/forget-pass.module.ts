import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPassRoutingModule } from './forget-pass-routing.module';
import { ForgetPassComponent } from './forget-pass.component';


@NgModule({
  declarations: [
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    ForgetPassRoutingModule
  ]
})
export class ForgetPassModule { }
