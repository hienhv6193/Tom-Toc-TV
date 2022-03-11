import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { SibabarProfileComponent } from '../components/sibabar-profile/sibabar-profile.component';

@NgModule({
  declarations: [
  FooterComponent,
  SideBarComponent, 
  SibabarProfileComponent,
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SideBarComponent,
    MatInputModule,
    MatDialogModule
  ]
})
export class SharedModule { }
