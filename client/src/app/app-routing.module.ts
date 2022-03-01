import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) }, { path: 'forgetPass', loadChildren: () => import('./pages/forget-pass/forget-pass.module').then(m => m.ForgetPassModule) },{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },{ path: 'tranglivestream', loadChildren: () => import('./pages/tranglivestream/tranglivestream.module').then(m => m.TranglivestreamModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
