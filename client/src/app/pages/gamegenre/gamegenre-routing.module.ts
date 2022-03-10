import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamegenreComponent } from './gamegenre.component';

const routes: Routes = [{ path: '', component: GamegenreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamegenreRoutingModule { }
