import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClonehomeRoutingModule } from './clonehome-routing.module';
import { ClonehomeComponent } from './clonehome.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClonehomeComponent
  ],
  imports: [
    CommonModule,
    ClonehomeRoutingModule,
    SharedModule
  ]
})
export class ClonehomeModule { }
