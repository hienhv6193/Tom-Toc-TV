import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPassRoutingModule } from './forget-pass-routing.module';
import { ForgetPassComponent } from './forget-pass.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    ForgetPassRoutingModule,
    SharedModule
  ]
})
export class ForgetPassModule { }
