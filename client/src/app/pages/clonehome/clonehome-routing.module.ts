import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClonehomeComponent } from './clonehome.component';

const routes: Routes = [{ path: '', component: ClonehomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClonehomeRoutingModule { }
