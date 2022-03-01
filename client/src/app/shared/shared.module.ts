import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { InfHomeComponent } from '../components/inf-home/inf-home.component';

import {MatFormFieldModule} from '@angular/material/form-field'
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
  FooterComponent,
  InfHomeComponent,
  SidebarComponent,
],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    FooterComponent,
    InfHomeComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    SidebarComponent,
  ]
})
export class SharedModule { }
