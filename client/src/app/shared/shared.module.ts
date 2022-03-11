import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
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
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    FooterComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    SideBarComponent, 
    MatExpansionModule,
    MatDialogModule,
    SibabarProfileComponent,
  ]
})
export class SharedModule { }
