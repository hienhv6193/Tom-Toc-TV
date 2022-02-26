import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gamegenre', loadChildren: () => import('./pages/gamegenre/gamegenre.module').then(m => m.GamegenreModule) }, { path: 'pubgmobile', loadChildren: () => import('./pages/pubgmobile/pubgmobile.module').then(m => m.PubgmobileModule) }, { path: 'moba', loadChildren: () => import('./pages/moba/moba.module').then(m => m.MobaModule) }, { path: 'tactic', loadChildren: () => import('./pages/tactic/tactic.module').then(m => m.TacticModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
