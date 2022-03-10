import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFollowComponent } from './my-follow.component';

const routes: Routes = [{ path: '', component: MyFollowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFollowRoutingModule { }
