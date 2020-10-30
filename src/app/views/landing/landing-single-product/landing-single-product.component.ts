import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';
import { combineAll } from 'rxjs/operators';
@Component({
  selector: 'app-landing-single-product',
  templateUrl: './landing-single-product.component.html',
  styleUrls: ['./landing-single-product.component.css']
})
export class LandingSingleProductComponent implements OnInit {
  course: Course;
  isActive: boolean = false;
  user: User;
  constructor(private courseService: CourseService, private route: ActivatedRoute,
     private toastr: ToastrService, private router: Router, public dialog: MatDialog,private authService: AuthService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.course = data['course'];
    });
    this.isActiveUser();
  }


  getCourse(){
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
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

  addCourseToUser(id: number){
      if(this.logedIn()) {
        if(this.isActive === true) {
          this.courseService.addcourseToUser(id).subscribe(next => {
            this.toastr.success('با موفقیت ثبت نام شد');
            this.router.navigate(['/Customer/dashboard']);
          });
        } else {
          this.openDialogNotVerify();
        }
      } else {
        this.openDialogNotLogin();
      }
      
  }
  openDialogNotLogin() {
    this.dialog.open(YouAreNotLoginDialog);
  }
  openDialogNotVerify() {
    this.dialog.open(YouAreNotVerifyDialog);
  }
}

@Component({
  selector: 'dialog-not-login',
  templateUrl: 'you-are-not-login-dialog.html',
})
export class YouAreNotLoginDialog { 
  constructor(public dialog: MatDialog, private router: Router){}
  
  
  closeDialog() {
    this.dialog.closeAll();
  }

  register() {
    this.router.navigate(['/register']);
    this.dialog.closeAll();
  }

  login() {
    this.router.navigate(['/login']);
    this.dialog.closeAll();
  }
}
@Component({
  selector: 'dialog-not-verify',
  templateUrl: 'you-are-not-verify-dialog.html',
})
export class YouAreNotVerifyDialog { 
  constructor(public dialog: MatDialog){}
  
  
  closeDialog() {
    this.dialog.closeAll();
  }
}