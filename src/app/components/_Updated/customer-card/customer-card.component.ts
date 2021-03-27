
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { UserLoginResponse } from 'src/app/_models/UserLoginResponse';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() course: Course;

  responseUserlogin: UserLoginResponse;
  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
  }


  getLoginUrl(){
    this.courseService.getLoginUrl(this.course.id).subscribe(response => {
      this.responseUserlogin = response;

      this.router.navigate(['/skyroom/' , this.responseUserlogin.result]);

      // window.location.href = response.result;
    });
  }

}
