import { Injectable } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:any
  constructor(public auth:Auth) {
    if(auth){
      authState(this.auth).subscribe((temp:any)=>{
         this.user=temp;
      console.log(this.user)
       }); 
      }
   }
   public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider())
  }
  public async loginF(){
    return await signInWithPopup(this.auth,new FacebookAuthProvider())
  }
  public async logout(){
    return await signOut(this.auth);
  }
}
