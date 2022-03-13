import { Component, OnInit, ViewChild } from '@angular/core';
import { gameHot } from 'src/app/models/gameHot.model';

const DATA: gameHot[]=[
  {
    name:"game1",
    titile:"HHH",
    people: 1,
  },{
    name:"game2",
    titile:"hzsjdfa",
    people: 2,
  },{
    name:"game3",
    titile:"sakhhf",
    people: 3,
  },
  { 
    name:"game4",
    titile:"skjafha",
    people: 6,
  },
  {
    name:"game5",
    titile:"asfhaas",
    people: 3,
  },
  {
    name:"game6",
    titile:"askhfiua",
    people: 5,
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayColumns:string[]=["name","titile","people"];
  // dataSource=new MatTableDataSource()
  // @ViewChild()
  constructor() { }

  ngOnInit(): void {
  }

}
