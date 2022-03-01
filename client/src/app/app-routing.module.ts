import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'tranglivestream', loadChildren: () => import('./pages/tranglivestream/tranglivestream.module').then(m => m.TranglivestreamModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
