import { Component, OnInit , Input } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-w-c-product',
  templateUrl: './w-c-product.component.html',
  styleUrls: ['./w-c-product.component.css']
})
export class WCProductComponent implements OnInit {
  @Input() course: Course;









  constructor() { }

  ngOnInit(): void {
  }

}
