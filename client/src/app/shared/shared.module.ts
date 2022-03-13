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
import { FontEditProfileComponent } from '../components/font-edit-profile/font-edit-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
  FooterComponent,
  SideBarComponent, 
  SibabarProfileComponent,
  FontEditProfileComponent,
],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule
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
    FontEditProfileComponent,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
