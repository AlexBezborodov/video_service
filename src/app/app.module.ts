import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PlayerPageComponent,
    VideoListComponent,
    HeaderComponent,
    VideoItemComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '520280539870-4vovnpl8co4j2di4lgt7ql7tel3j8eb9.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('992740114836514')
          }
        ]
      } as SocialAuthServiceConfig,
    }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
