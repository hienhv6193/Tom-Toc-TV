import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { InfHomeComponent } from '../components/inf-home/inf-home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
  FooterComponent,
  InfHomeComponent,
  SidebarComponent,

],
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
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
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
