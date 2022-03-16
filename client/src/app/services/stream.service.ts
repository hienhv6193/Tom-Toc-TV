import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(public router:Router) { }

  createStream(){
      this.router.navigate([`/tranglivestream`])
  }
}
