import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: any;
  selectedVideo: any;

  constructor(private videoService : VideoService) {
   }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((resVideoData: any)=>{
      console.log(resVideoData);
      this.videos=resVideoData;
    })
  }

  onSelectVideo(vid:any){
    this.selectedVideo=vid;
    console.log(this.selectedVideo)
  }

}
