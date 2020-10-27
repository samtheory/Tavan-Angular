import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { PhotoService } from 'src/app/_services/photo.service';

@Component({
  selector: 'app-p-a-slide-show',
  templateUrl: './p-a-slide-show.component.html',
  styleUrls: ['./p-a-slide-show.component.css']
})
export class PASlideShowComponent implements OnInit {
  photos: Photo[];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    })
  }

}
