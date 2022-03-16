import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from '@angular/fire/auth';
import { SigninComponent } from '../signin/signin.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide=true;
  hie=true;
  user:any;
  constructor(public dialog : MatDialog,public auth:Auth, public loginSV:AuthService) {if(auth){
    authState(this.auth).subscribe((temp:any)=>{
       this.user=temp;
    console.log(this.user)
     }); 
    }
    
    }
 
    public login(){
      this.loginSV.login();
    }
    public loginF(){
      this.loginSV.loginF();
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
