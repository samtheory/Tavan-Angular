import { Component, OnInit } from '@angular/core';



interface Video {
  name : string;
  
}
@Component({
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {


  videos: Video[];

  selectedCityCode: string;

  constructor() {
    this.videos = [
  {name: "video 1"},
  {name: "video 2"},
  {name: "video 3"},
  {name: "video 4"},
  {name: "video 5"},
  {name: "video 6"},
    ];
  }
  ngOnInit(): void {
 
  }

}
