import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Sex } from 'src/app/models/sex.model';


@Component({
  selector: 'app-font-edit-profile',
  templateUrl: './font-edit-profile.component.html',
  styleUrls: ['./font-edit-profile.component.scss']
})
export class FontEditProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.email]);
  formitem!:FormGroup;
  constructor(private formBuild:FormBuilder) {
    this.formitem=this.formBuild.group({
      name:'',
      sex:'',
      email: new FormControl('', [Validators.email]),
      DoB:'',
      phone:'',
      coin:''
    })
   }

  ngOnInit(): void {
  }
  sexs: Sex[] = [
    {value: 'Nam', viewValue: 'Nam'},
    {value: 'Nữ', viewValue: 'Nữ'},
    {value: 'khác', viewValue: 'khác'},
  ]
  // text(){
  //     alert(`name: ${this.formitem.value.name} email: ${this.formitem.value.email}  sex: ${this.formitem.value.sex} `)
  // }
  // getSex(sex:string){
  //   this.formitem.value.sex=sex
  //   console.log( this.formitem.value.sex);
  // }
}
