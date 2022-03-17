import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sibabar-profile',
  templateUrl: './sibabar-profile.component.html',
  styleUrls: ['./sibabar-profile.component.scss']
})
export class SibabarProfileComponent implements OnInit {
  public temp="";
  constructor(public router:Router,public auth:AuthService) {
   }
  ngOnInit(): void {

  }
  // check(path: string){
    
  // }
  navigate(path: string){
    this.temp=path;
    this.router.navigateByUrl(path);
  }

}
