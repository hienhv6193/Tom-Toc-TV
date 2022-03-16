import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivstreamComponent } from './livstream.component';

const routes: Routes = [{ path: '', component: LivstreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivstreamRoutingModule { }
