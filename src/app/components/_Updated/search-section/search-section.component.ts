import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/_models/photo';
import { PhotoService } from 'src/app/_services/photo.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  @Input() photo: any;
  photos: Photo[];
  searchP: any = {};
  

  constructor(private router: Router, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getphotos();
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { name: this.searchP.name } }).then(() => {
      window.location.reload();
    });
    
  }
  getphotos(){
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  // scroll to target method 
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


}
