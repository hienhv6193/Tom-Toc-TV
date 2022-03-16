import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivstreamRoutingModule } from './livstream-routing.module';
import { LivstreamComponent } from './livstream.component';


@NgModule({
  declarations: [
    LivstreamComponent
  ],
  imports: [
    CommonModule,
    LivstreamRoutingModule
  ]
})
export class LivstreamModule { }
