import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  hide=true;
  hie=true;
  user:any;
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
  openSignIn(){
    this.dialog.open(SigninComponent, { panelClass: 'custom-dialog-container' })
  }


}
