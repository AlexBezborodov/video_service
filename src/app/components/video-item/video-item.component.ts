import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() video: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  openVideo(e) {
    const navigationExtras = {
      state: {
        videoId: e.target.id
      }
    };
    this.router.navigate([`video`], navigationExtras);
  }
}
