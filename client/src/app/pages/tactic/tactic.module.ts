import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacticRoutingModule } from './tactic-routing.module';
import { TacticComponent } from './tactic.component';


@NgModule({
  declarations: [
    TacticComponent
  ],
  imports: [
    CommonModule,
    TacticRoutingModule
  ]
})
export class TacticModule { }
