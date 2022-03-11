import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(SigninComponent, { panelClass: 'custom-dialog-container' })
  }
  open(){
    this.dialog.open(SignupComponent, { panelClass: 'custom-dialog-container' })
  }
}
