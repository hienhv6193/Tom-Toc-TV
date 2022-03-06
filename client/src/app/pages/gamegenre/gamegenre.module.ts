import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamegenreRoutingModule } from './gamegenre-routing.module';
import { GamegenreComponent } from './gamegenre.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GamegenreComponent
  ],
  imports: [
    CommonModule,
    GamegenreRoutingModule,
    SharedModule,
  ]
})
export class GamegenreModule { }
