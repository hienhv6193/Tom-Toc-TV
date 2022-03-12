import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFollowRoutingModule } from './my-follow-routing.module';
import { MyFollowComponent } from './my-follow.component';


@NgModule({
  declarations: [
    MyFollowComponent
  ],
  imports: [
    CommonModule,
    MyFollowRoutingModule
  ]
})
export class MyFollowModule { }
