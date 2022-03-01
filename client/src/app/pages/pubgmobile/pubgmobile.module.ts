import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubgmobileRoutingModule } from './pubgmobile-routing.module';
import { PubgmobileComponent } from './pubgmobile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PubgmobileComponent
  ],
  imports: [
    CommonModule,
    PubgmobileRoutingModule,
    SharedModule
  ]
})
export class PubgmobileModule { }
