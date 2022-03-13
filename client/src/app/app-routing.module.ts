import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
{ path: 'forgetPass', loadChildren: () => import('./pages/forget-pass/forget-pass.module').then(m => m.ForgetPassModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
=======

{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
>>>>>>> b30b4b29c2e0840f8b7f34cc113f87ad801f3e6f
{ path: 'tranglivestream', loadChildren: () => import('./pages/tranglivestream/tranglivestream.module').then(m => m.TranglivestreamModule) },
{ path: 'gamegenre', loadChildren: () => import('./pages/gamegenre/gamegenre.module').then(m => m.GamegenreModule)},
{ path: 'createStream', loadChildren: () => import('./pages/create-stream/create-stream.module').then(m => m.CreateStreamModule) },
{ path: 'infor-profile', loadChildren: () => import('./pages/infor-profile/infor-profile.module').then(m => m.InforProfileModule) },
{ path: 'view-history', loadChildren: () => import('./pages/view-history/view-history.module').then(m => m.ViewHistoryModule) },
{ path: 'my-follow', loadChildren: () => import('./pages/my-follow/my-follow.module').then(m => m.MyFollowModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
