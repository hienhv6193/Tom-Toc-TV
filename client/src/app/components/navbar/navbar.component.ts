import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:any
  constructor(public dialog : MatDialog,public auth:Auth) {if(auth){
    authState(this.auth).subscribe((temp:any)=>{
       this.user=temp;
    console.log(this.user)
     }); 
    }

    
    }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(SigninComponent, { panelClass: 'custom-dialog-container' })
  }
  open(){
    this.dialog.open(SignupComponent, { panelClass: 'custom-dialog-container' })
  }
  public async logout(){
    return await signOut(this.auth);
  }
}
