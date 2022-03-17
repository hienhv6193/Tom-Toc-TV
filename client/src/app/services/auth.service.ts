import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState,  signOut,  GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,getAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:any
  constructor(public auth:Auth,public http:HttpClient) {
    if(auth){
      authState(this.auth).subscribe((temp:any)=>{
         this.user=temp;
     
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
  // public async getUserInfo(Id:any){
  //   return await this.http.
  // }

}
