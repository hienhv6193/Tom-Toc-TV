import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from './components/signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor() { }

  ngOnInit(): void {
  }
}
