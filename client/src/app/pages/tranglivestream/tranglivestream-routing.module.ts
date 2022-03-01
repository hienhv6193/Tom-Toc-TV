import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranglivestreamComponent } from './tranglivestream.component';

const routes: Routes = [{ path: '', component: TranglivestreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranglivestreamRoutingModule { }
