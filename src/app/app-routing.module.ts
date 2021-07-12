import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { VideoListComponent } from './pages/video-list/video-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: StartPageComponent
  },
  {
    path: 'main',
    component: VideoListComponent,
  },
  {
    path: 'video',
    component: PlayerPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
