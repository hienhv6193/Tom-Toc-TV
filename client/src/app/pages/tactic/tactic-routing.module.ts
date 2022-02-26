import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacticComponent } from './tactic.component';

const routes: Routes = [{ path: '', component: TacticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacticRoutingModule { }
