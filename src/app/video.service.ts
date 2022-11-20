import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _url="http://localhost:3000/api/videos"
  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get(this._url);
  }


}
