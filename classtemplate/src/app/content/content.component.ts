import { Component, OnInit, Input } from '@angular/core';
import { CONTENT_TYPE } from '../models/enum';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() type?: string;
  @Input() title?: string;
  @Input() data?: string;
  videourl?:SafeResourceUrl;

  CONTENT_TYPE = CONTENT_TYPE;

  ngOnInit(): void {
    this.videourl = this.getSafeUrl(this.data!);
  }

  constructor(protected sanitizer: DomSanitizer) { }

  getSafeUrl(id: string): SafeResourceUrl { 
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id); 
  }


}
