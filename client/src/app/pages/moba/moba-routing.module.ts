import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobaComponent } from './moba.component';

const routes: Routes = [{ path: '', component: MobaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobaRoutingModule { }
