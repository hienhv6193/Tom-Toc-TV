import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotComponent } from '../forgot/forgot.component';
import { SignupComponent } from '../signup/signup.component';

import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide=true;
  user:any
  constructor(public dialog : MatDialog,public auth:AuthService) {
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
