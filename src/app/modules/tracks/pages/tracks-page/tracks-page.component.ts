import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

/* Es necesario inicializar la variable como TrackModel */
  mockTracksList:Array<TrackModel> = [  ]

  constructor() { }

  ngOnInit(): void {
    /* Con esto permite convertir el "Modulo" en un Array */
    const {data}:any = (dataRaw as any).default
    this.mockTracksList = data;
  }

}
