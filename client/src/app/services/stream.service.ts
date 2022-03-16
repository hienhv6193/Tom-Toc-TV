
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDoc, doc, query } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Stream } from '../models/stream.model';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  public streamInfo: any = new Stream();
  public streamList!: Array<Stream>
  public streamLink:any;
  constructor(public router: Router, public fs: Firestore, public AcRoute: ActivatedRoute) {

  }


  createStream() {
    this.router.navigate([`/tranglivestream`])
  }
  getStreamsData() {
    let docRef = collection(this.fs, 'Streams');
    collectionData(docRef, { idField: 'idDoc' }).subscribe((data) => {
      this.streamList = data;
    })
  }
  getStream(Id: any) {
    let docRef = collection(this.fs, 'Streams');
    collectionData(docRef, { idField: 'idDoc' }).subscribe((data) => {
      data.forEach(doc => {
        if (doc['idDoc'] == Id) {
          this.streamInfo = doc;

          this.streamLink = `${environment.rtmpConnectionString}:8000/live/${doc['StreamKey']}/index.m3u8`;

        }
      })
    })
  }
}
