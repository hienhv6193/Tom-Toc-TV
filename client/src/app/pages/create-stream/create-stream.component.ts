import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-stream',
  templateUrl: './create-stream.component.html',
  
  styleUrls: ['./create-stream.component.scss']
})
export class CreateStreamComponent implements OnInit {
  hide=true;
  constructor() { }

  ngOnInit(): void {
  }

}
