import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStreamComponent } from './create-stream.component';

const routes: Routes = [{ path: '', component: CreateStreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateStreamRoutingModule { }
