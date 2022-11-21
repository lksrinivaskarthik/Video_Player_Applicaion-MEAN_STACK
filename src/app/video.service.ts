import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Video } from './video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _url="http://localhost:3000/api/videos"
  private post_url="http://localhost:3000/api/video"
  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get(this._url);
  }

  insertVideo(video:Video){
    return this.http.post(this.post_url,video);
  }

  updateVideo(video:Video){
    return this.http.put(`${this._url}/${video._id}`,video);
  }

  deleteVideo(video:Video){
    return this.http.delete(`${this._url}/${video._id}`)
  }

}
