import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-card-product1',
  templateUrl: './card-product1.component.html',
  styleUrls: ['./card-product1.component.css']
})
export class CardProduct1Component implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
