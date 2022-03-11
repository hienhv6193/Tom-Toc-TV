import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotComponent } from '../forgot/forgot.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide=true;
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  open(){
    this.dialog.open(SignupComponent, { panelClass: 'custom-dialog-container' })
  }
  forget(){
    this.dialog.open(ForgotComponent, { panelClass: 'custom-dialog-container' })
  }
}
