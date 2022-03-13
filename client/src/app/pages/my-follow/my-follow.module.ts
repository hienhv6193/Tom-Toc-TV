import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFollowRoutingModule } from './my-follow-routing.module';
import { MyFollowComponent } from './my-follow.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyFollowComponent
  ],
  imports: [
    CommonModule,
    MyFollowRoutingModule,
    SharedModule
  ]
})
export class MyFollowModule { }
