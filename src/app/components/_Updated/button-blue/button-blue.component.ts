import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'button-blue',
  templateUrl: './button-blue.component.html',
  styleUrls: ['./button-blue.component.css']
})
export class ButtonBlueComponent implements OnInit {
  @Input() Link: string ;
  constructor() { }

  ngOnInit(): void {
  }

}
