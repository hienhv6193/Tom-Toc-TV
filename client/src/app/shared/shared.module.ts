import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { InfHomeComponent } from '../components/inf-home/inf-home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { SidebarComponent } from '../components/sidebar/sidebar.component';
@NgModule({
  declarations: [
  FooterComponent,
  InfHomeComponent,
  NavbarComponent,
  SidebarComponent,
],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    FooterComponent,
    InfHomeComponent,
    NavbarComponent,
    MatFormFieldModule,
    SidebarComponent,
  ]
})
export class SharedModule { }
