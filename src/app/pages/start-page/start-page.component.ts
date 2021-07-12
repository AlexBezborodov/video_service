import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  signInGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (res) => {
      if (res.authToken) {
        localStorage.setItem('token', res.authToken);
        this.router.navigate(['main']);
      }
    }).catch(err => {
      console.log('ERROR Sign In', err);
    });
  }

  signInFb() {
    console.log('clicked Fb');
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then( res =>
      {
        if (res.authToken) {
          localStorage.setItem('token', res.authToken);
          this.router.navigate(['main']);
        }
    }).catch(err => {
      console.log('ERROR Sign In', err);
    });
  }
}
