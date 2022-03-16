import { environment } from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Stream } from './../../models/stream.model';
import { StreamService } from 'src/app/services/stream.service';
import { Component, OnInit } from '@angular/core';
import HLS from 'hls.js';
@Component({
  selector: 'app-tranglivestream',
  templateUrl: './tranglivestream.component.html',
  styleUrls: ['./tranglivestream.component.scss']
})
export class TranglivestreamComponent implements OnInit {
  public streamId: any;

  constructor(public stream: StreamService, public AcRoute: ActivatedRoute) {
    this.AcRoute.paramMap.subscribe((params) => {
      this.streamId = params.get('id');
      this.stream.getStream(this.streamId)
    })

  }

  ngOnInit(): void {
    this.getStreamInfo()
  }
  async getStreamInfo() {
    var video = <HTMLVideoElement>document.getElementById('video');
    setTimeout(() => {
      var hls = new HLS();
      hls.loadSource(this.stream.streamLink);
      hls.attachMedia(video);

    }, 3000)



  }


}
