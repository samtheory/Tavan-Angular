import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-p-a-dashboard',
  templateUrl: './p-a-dashboard.component.html',
  styleUrls: ['./p-a-dashboard.component.css']
})
export class PADashboardComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

}
