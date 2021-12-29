import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

/* dataRaw es el nombre al json que tenemos y se importa para poder usarlo */
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  tracks:TrackModel[] = [];

  constructor() { }

  ngOnInit(): void {

    const {data}: any = (dataRaw as any).default
    this.tracks = data;
  }

}
