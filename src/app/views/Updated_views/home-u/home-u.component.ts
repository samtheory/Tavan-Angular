import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-u',
  templateUrl: './home-u.component.html',
  styleUrls: ['./home-u.component.css']
})
export class HomeUComponent implements OnInit {
  megaMenu: boolean;
  constructor() { }

  ngOnInit(): void {
    this.megaMenu = false ;
  }

}
