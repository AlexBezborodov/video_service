import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { GetYouTubeInfo } from 'src/app/services/getUserInfo.service';
import { VideoList } from 'src/app/services/interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  user: any;
  isSignedin: boolean;
  videoList: VideoList | any;
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private youtubeService: GetYouTubeInfo

  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
      this.getList();
    });
    if (!this.user) {
      this.router.navigate(['']);
      localStorage.clear();
     };
    }
    getList() {
      this.youtubeService.getListChanel().subscribe( (res: any) => {
        console.log('list2', res);
        this.videoList = res.items;
      });
    }
  }
