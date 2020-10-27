import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-slid-show',
  templateUrl: './slid-show.component.html',
  styleUrls: ['./slid-show.component.css']
})
export class SlidShowComponent implements OnInit {
  @Input() photos: Photo[];
  constructor() { }

  ngOnInit(): void {
  }

}
