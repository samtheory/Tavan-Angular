import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginResponse } from 'src/app/_models/UserLoginResponse';

@Component({
  selector: 'app-skyroom',
  templateUrl: './skyroom.component.html',
  styleUrls: ['./skyroom.component.css']
})
export class SkyroomComponent implements OnInit {
  url: string;

  responseLoginUrl: UserLoginResponse;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.params['url'];
    console.log(this.url);
  }



}
