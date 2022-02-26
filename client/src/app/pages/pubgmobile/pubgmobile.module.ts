import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubgmobileRoutingModule } from './pubgmobile-routing.module';
import { PubgmobileComponent } from './pubgmobile.component';


@NgModule({
  declarations: [
    PubgmobileComponent
  ],
  imports: [
    CommonModule,
    PubgmobileRoutingModule
  ]
})
export class PubgmobileModule { }
