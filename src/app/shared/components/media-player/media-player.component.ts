import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:TrackModel = {
    cover: 'https://i.ytimg.com/vi/AMDSixhG1lc/maxresdefault.jpg',
    album:'Katie & Mathew',
    name: 'Where The Road Meets the Sun',
    url: 'http:hola',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
