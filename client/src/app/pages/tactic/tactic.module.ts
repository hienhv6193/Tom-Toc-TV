import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacticRoutingModule } from './tactic-routing.module';
import { TacticComponent } from './tactic.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TacticComponent
  ],
  imports: [
    CommonModule,
    TacticRoutingModule,
    SharedModule
  ]
})
export class TacticModule { }
