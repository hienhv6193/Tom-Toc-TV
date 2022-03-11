import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { SibabarProfileComponent } from '../components/sibabar-profile/sibabar-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MatInputModule,
    MatIconModule,
    SideBarComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
