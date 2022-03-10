import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
<<<<<<< HEAD
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {MatDialogModule} from '@angular/material/dialog';
=======
import {MatFormFieldModule} from '@angular/material/form-field';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { SibabarProfileComponent } from '../components/sibabar-profile/sibabar-profile.component';
>>>>>>> f85d38345fb5075a2ee1eb9e57ff449161f566fc
@NgModule({
  declarations: [
  FooterComponent,
<<<<<<< HEAD
  SideBarComponent, 
  SibabarProfileComponent,
=======
  InfHomeComponent,
  SidebarComponent,

>>>>>>> 97a077947049a66d46a4ed40807f6af42a614ab0
],
  imports: [
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
<<<<<<< HEAD
=======
    MatExpansionModule,
    MatDialogModule
>>>>>>> f85d38345fb5075a2ee1eb9e57ff449161f566fc
  ],
  exports: [
    FooterComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
<<<<<<< HEAD
    SidebarComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
=======
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    SideBarComponent, 
    MatExpansionModule,
    MatDialogModule,
    SibabarProfileComponent,
>>>>>>> f85d38345fb5075a2ee1eb9e57ff449161f566fc
  ]
})
export class SharedModule { }
