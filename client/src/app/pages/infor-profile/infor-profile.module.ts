import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InforProfileRoutingModule } from './infor-profile-routing.module';
import { InforProfileComponent } from './infor-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InforProfileComponent
  ],
  imports: [
    CommonModule,
    InforProfileRoutingModule,
    SharedModule
  ]
})
export class InforProfileModule { }
