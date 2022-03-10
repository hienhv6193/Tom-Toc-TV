import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
{ path: 'forgetPass', loadChildren: () => import('./pages/forget-pass/forget-pass.module').then(m => m.ForgetPassModule) },
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'tranglivestream', loadChildren: () => import('./pages/tranglivestream/tranglivestream.module').then(m => m.TranglivestreamModule) },
{ path: 'gamegenre', loadChildren: () => import('./pages/gamegenre/gamegenre.module').then(m => m.GamegenreModule)},
{ path: 'createStream', loadChildren: () => import('./pages/create-stream/create-stream.module').then(m => m.CreateStreamModule) }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
