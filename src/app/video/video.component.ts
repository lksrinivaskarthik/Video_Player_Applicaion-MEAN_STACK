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

  flagNewVideo :Boolean=true;
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
    this.flagNewVideo=true
    console.log(this.selectedVideo)
  }

  onSubmitAddVideo(video: Video){
    console.log(video._id)
    this.videoService.insertVideo(video).subscribe(newVideo=>{
      
      this.videos.push(newVideo);
      this.selectedVideo=video;
    });
  }

  enableNewVideo(){
    this.flagNewVideo=false;
  }

}
