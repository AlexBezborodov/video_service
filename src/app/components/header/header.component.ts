import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: SocialUser;
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logout(): void {
    this.socialAuthService.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['']);
    }).catch((err) => {
      console.log('ERROR', err);
    });
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(res => console.log('Refresh token', res));
  }
}
