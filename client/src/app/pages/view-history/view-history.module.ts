import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHistoryRoutingModule } from './view-history-routing.module';
import { ViewHistoryComponent } from './view-history.component';


@NgModule({
  declarations: [
    ViewHistoryComponent
  ],
  imports: [
    CommonModule,
    ViewHistoryRoutingModule
  ]
})
export class ViewHistoryModule { }
