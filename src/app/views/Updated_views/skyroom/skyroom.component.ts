import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skyroom',
  templateUrl: './skyroom.component.html',
  styleUrls: ['./skyroom.component.css']
})
export class SkyroomComponent implements OnInit {
  url: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.params['url'];
  }



}
