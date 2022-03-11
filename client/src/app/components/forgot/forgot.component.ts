import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  hide=true;
  hie=true;
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  openSignIn(){
    this.dialog.open(SigninComponent, { panelClass: 'custom-dialog-container' })
  }


}
