import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class GetYouTubeInfo {
  apiKey = 'AIzaSyDg50Yo0ElCt7FLfbhGyzWHdJrG_2Z4I9g';
  // eslint-disable-next-line max-len
  url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=77&playlistId=UUP_IYZTiqbmUqmI3KXHIEoQ&key=${this.apiKey}`;
  statistics = null;
  generalInfo = null;
  constructor(
    private http: HttpClient
  ) {}
  getListChanel() {
     return this.http.get( this.url );
  }
getstatistics(videoId) {
 // eslint-disable-next-line max-len
 return this.http.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${this.apiKey}`);
}
getGeneralInfo(videoId) {
// eslint-disable-next-line max-len
return this.http.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${this.apiKey}`);
}
}

