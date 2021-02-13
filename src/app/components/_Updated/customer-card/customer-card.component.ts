
import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
