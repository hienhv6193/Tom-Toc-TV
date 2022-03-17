import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StreamService } from 'src/app/services/stream.service';
export interface Category{
  categoryId:number;
  name:string;
}
@Component({
  selector: 'app-create-stream',
  templateUrl: './create-stream.component.html',

  styleUrls: ['./create-stream.component.scss'],
})
export class CreateStreamComponent implements OnInit {
  categories: Category[] = [
    {categoryId: 1, name: 'GAME'},
    {categoryId: 2, name: 'TALKSHOW'},
    {categoryId: 3, name: 'BÌNH LUẬN GIẢI ĐẤU'},
  ];
  public createStreamForm: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, public stream: StreamService) {
    this.createStreamForm = this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl(''),
      Streamkey: new FormControl('', [Validators.required]),
    });
    this.createStreamForm.controls['Streamkey'];
  }

  ngOnInit(): void {}
  genKey() {
    this.createStreamForm.controls['Streamkey'].patchValue(uuidv4());
    console.log(this.createStreamForm.controls['Streamkey'].value);
  }
  submitCreateStream() {
    let form = this.createStreamForm;
    if (form.valid) {
      this.stream.createStream();
    } else {
      alert(`Vui lòng nhập điền đủ thông tin`);
    }
  }
}
