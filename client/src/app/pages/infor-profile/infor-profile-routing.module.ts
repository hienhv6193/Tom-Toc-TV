import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InforProfileComponent } from './infor-profile.component';

const routes: Routes = [{ path: '', component: InforProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InforProfileRoutingModule { }
