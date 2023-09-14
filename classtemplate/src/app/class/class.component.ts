import { Component, OnInit } from '@angular/core';
import { WEEK_STYLE } from '../models/enum';
import { CLASS_TEMPLATE } from '../models/data';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ClassTemplate, Week } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  template: ClassTemplate = CLASS_TEMPLATE;
  WEEK_STYLE = WEEK_STYLE;

  constructor(private deviceService: DeviceDetectorService, private http: HttpClient) { }

  ngOnInit() {
   
    this.http.get<ClassTemplate>('assets/data.json').subscribe(response => {
      this.template = response;
    });
  }

  isMobile(): boolean {
    return !this.deviceService.isDesktop() || (window.innerWidth <= 1000);
  }

}
