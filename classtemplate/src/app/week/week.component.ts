import { Component, OnInit, Input } from '@angular/core';
import { WEEK_STYLE, CONTENT_TYPE } from '../models/enum';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DomSanitizer } from '@angular/platform-browser';
import { Week } from '../models/models';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() content? : Week;
  @Input() style? : number;
  @Input() bg? : string;

  showPresentation = false;
  fullPresentation = false;
  showExercices = false;
  fullExercices = false;
  panelOpenState = false;

  tiles: Tile[] = [];
  WEEK_STYLE = WEEK_STYLE;
  CONTENT_TYPE = CONTENT_TYPE;

  constructor(private deviceService: DeviceDetectorService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  isMobile(): boolean {
    return !this.deviceService.isDesktop() || (window.innerWidth <= 1000);
  }

  contentAsVideos(content:any): boolean {
    if(content.videos.length !=0 && content.videos[0].data != "") {
      return true;
    } else {
      return false;
    }

  }

  contentAsPresentation(content:any): boolean {
    if(content.presentation != null && content.presentation != undefined) {
      return true;
    } else {
      return false;
    }

  }

  contentAsExercices(content:any): boolean {
    if(content.exercices != null && content.exercices != undefined) {
      return true;
    } else {
      return false;
    }

  }

  safe(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
