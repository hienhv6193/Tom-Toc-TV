import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHistoryRoutingModule } from './view-history-routing.module';
import { ViewHistoryComponent } from './view-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewHistoryComponent
  ],
  imports: [
    CommonModule,
    ViewHistoryRoutingModule,
    SharedModule
  ]
})
export class ViewHistoryModule { }
