import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})
export class VideoDetailComponent implements OnInit {

  video:any;
  public editTitle:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  //if we change from one title to another title we need to change back to its original state so in order to do that we use
  //  ngOnChanges lifecycle hook

  ngOnChanges(){
    this.editTitle=false;
  }

  onTitleClick(){
    this.editTitle=true;
  }

}
