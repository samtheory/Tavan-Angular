import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseService } from 'src/app/_services/course.service';
import { OffService } from 'src/app/_services/off.service';
import { PaymentService } from 'src/app/_services/payment.service';



interface Video {
  name : string;
  
}
@Component({
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.scss']
})
export class WebinarComponent implements OnInit {
  course: Course;
  selectedVideo: any = {};
  isActive: boolean = false;
  user: User;
  url: string;
  off: any = {};
  rate = false ;
  model: any = {};
  dialog : boolean; 
  
  constructor(private courseService: CourseService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router,
    private authService: AuthService
    , private paymentService: PaymentService, private offService: OffService) { }
    
    ngOnInit(): void {
      this.dialog = false; 
    // this.route.data.subscribe(data => {
    //   this.course = data['course'];
    //   console.log(this.course);
    // });
    this.getCourse();
    this.isActiveUser();
  }


  getCourse(){
    this.courseService.gettheMainCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
      if(this.course.videos){
        this.url = this.course.videos[0].url;
      }

      console.log(course);
    });
  }
  getUrl(event) {
    this.url = event.target.value;
    console.log(this.url);
  }

  getOff(){
    this.offService.getOffCode(this.off.code).subscribe(off => {
      this.course.realCost = this.course.realCost * (100 -off.offPercent)/100;
      this.off.code = off.code;
    }, error => {
      this.toastr.error(error);
    });
  }

  logedIn() {
    return this.authService.logedIn();
  }

  isActiveUser() {
    this.user =JSON.parse(localStorage.getItem('user'));
    if(this.user.isActive === true) {
      this.isActive = true;
    }
  }

  buyCourse(id: number){
      if(this.logedIn()) {
        if(this.isActive === true) {
          if(this.course.realCost === 0)
          {
            this.addCourseToUser(id);
            
          } else {
            console.log(this.off);
          this.paymentService.buyCourse(this.off , id).subscribe(link => {
            const url = link.url;
            window.location.href = url;
          }, error => {
            this.toastr.error(error);
          });
          }
          
        } else {
          this.toastr.error("اکانت شما فعال نیست");
        
        }
      } else {
        this.showDialog();
      }
      
  }



  addCourseToUser(id: number){
    if(this.logedIn()) {
      if(this.isActive === true) {
        this.courseService.addcourseToUser(id).subscribe(next => {
          this.toastr.success('با موفقیت ثبت نام شد');
          this.router.navigate(['/Customer/dashboard']);
        });
      } else {
        this.toastr.error("اکانت شما فعال نیست");
        
      }
    } else {
      this.showDialog();
    }
    
}

loginreal(){
  this.authService.login(this.model).subscribe(response =>{
    console.log(response);
    this.hideDialog();
    // if(this.authService.decodeToken.role === 'admin'){
    //   this.router.navigate(['/admin/dashboard']);
    // } else {
    //   this.router.navigate(['/customer-panel']);
    // }
  });
}


showDialog(){
  this.dialog = true;
  console.log(this.dialog);
}
hideDialog(){
  this.dialog = false;
  console.log(this.dialog);
}


}

