import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranglivestream',
  templateUrl: './tranglivestream.component.html',
  styleUrls: ['./tranglivestream.component.scss']
})
export class TranglivestreamComponent implements OnInit {

  states = [
    {name: 'Alabama', capital: 'asaaaaaasasasaqweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesasasasasasasaasssssssssssssssssssdasdasdsadsasasasasasasasasasasasasasadddddddddddddddddddddddddddddddddddaaaa'},
    {name: 'Alaska', capital: 'Junea asda d asdas das sad asda s das das das dasdasdasdasdasd asdasd asdasd asu'},
    {name: 'Arizona', capital: 'Phoend asdsadassad asd asdasd asd as as dasd asdasd asdasd asd as dix'},
    {name: 'Arkansas', capital: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {name: 'California', capital: 'Sacramento'},
    {name: 'Colorado', capital: 'Denver'},
    {name: 'Connecticut', capital: 'Hartford'},
    {name: 'Delaware', capital: 'Dover'},
    {name: 'Florida', capital: 'Tallahassee'},
    {name: 'Georgia', capital: 'Atlanta'},
    {name: 'Hawaii', capital: 'Honolulu'},
    {name: 'Idaho', capital: 'Boise'},
    {name: 'Illinois', capital: 'Springfield'},
    {name: 'Indiana', capital: 'Indianapolis'},
    {name: 'Iowa', capital: 'Des Moines'},
    {name: 'Kansas', capital: 'Topeka'},
    {name: 'Kentucky', capital: 'Frankfort'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
