import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-landing-single-product',
  templateUrl: './landing-single-product.component.html',
  styleUrls: ['./landing-single-product.component.css']
})
export class LandingSingleProductComponent implements OnInit {
  course: Course;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCourse();
  }


  getCourse(){
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
    });
  }

  addCourseToUser(id: number){
      this.courseService.addcourseToUser(id).subscribe(next => {
        this.toastr.success('با موفقیت ثبت نام شد');
        this.router.navigate(['/Customer/dashboard']);
      })
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
  constructor(public dialog: MatDialog){}
  
  
  closeDialog() {
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