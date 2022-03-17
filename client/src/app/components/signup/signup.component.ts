import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth, authState } from '@angular/fire/auth';
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
  constructor(public dialog : MatDialog,public auth:AuthService) {
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
