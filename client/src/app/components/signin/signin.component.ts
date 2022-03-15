import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotComponent } from '../forgot/forgot.component';
import { SignupComponent } from '../signup/signup.component';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { getAuth, FacebookAuthProvider } from "firebase/auth";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide=true;
  user:any
  constructor(public dialog : MatDialog,public auth:Auth) {if(auth){
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
  ngOnInit(): void {
  }
  onCloseConfirm() {
    setTimeout(() => {
      this.dialog.closeAll();
    }, 1200);
  }
  
  open(){
    this.dialog.open(SignupComponent, { panelClass: 'custom-dialog-container' })
  }
  forget(){
    this.dialog.open(ForgotComponent, { panelClass: 'custom-dialog-container' })
  }
}
