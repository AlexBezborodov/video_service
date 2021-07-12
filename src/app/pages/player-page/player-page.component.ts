import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { SocialAuthService } from 'angularx-social-login';
import { GetYouTubeInfo } from 'src/app/services/getUserInfo.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent implements OnInit {
  user: any;
  isSignedin: boolean;
  videoId = null;
  apiLoaded = false;
  videoInfo: any;
  statistics: any;
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private ytService: GetYouTubeInfo
  ) {

  }

  ngOnInit() {
    this.videoId = this.router.getCurrentNavigation().extras.state.videoId;
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.videoInfo = this.ytService.getGeneralInfo(this.videoId).subscribe((res: any) => {
      this.videoInfo = res.items[0].snippet;
      console.log('videoinfo', this.videoInfo);
    } );
      this.statistics = this.ytService.getstatistics(this.videoId).subscribe((res: any) => {
        this.statistics = res.items[0].statistics;
        console.log('stats', this.statistics);
      });
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
    });
    if (!this.user) {
      this.router.navigate(['']);
      localStorage.clear();
     };
  }
  return() {
    this.router.navigate(['main']);
  }
}
