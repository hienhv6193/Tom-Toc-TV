import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubgmobileComponent } from './pubgmobile.component';

const routes: Routes = [{ path: '', component: PubgmobileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubgmobileRoutingModule { }
