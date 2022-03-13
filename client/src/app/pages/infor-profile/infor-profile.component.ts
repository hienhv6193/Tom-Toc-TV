import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FontEditProfileComponent } from 'src/app/components/font-edit-profile/font-edit-profile.component';

@Component({
  selector: 'app-infor-profile',
  templateUrl: './infor-profile.component.html',
  styleUrls: ['./infor-profile.component.scss']
})
export class InforProfileComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(FontEditProfileComponent,{  width: '30%',});
  }
}
