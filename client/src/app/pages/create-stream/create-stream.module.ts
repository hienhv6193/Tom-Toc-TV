import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStreamRoutingModule } from './create-stream-routing.module';
import { CreateStreamComponent } from './create-stream.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CreateStreamComponent
  ],
  imports: [
    CommonModule,
    CreateStreamRoutingModule,
    SharedModule
  ]
})
export class CreateStreamModule { }
