import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {
  course: Course;
  selectedVideo: any = {};
  isActive: boolean = false;
  user: User;
  url: string;
  off: any = {};
  dialog = true; 
  
  constructor(private courseService: CourseService, private route: ActivatedRoute,
     private toastr: ToastrService, private router: Router,
     private authService: AuthService
     , private paymentService: PaymentService, private offService: OffService) { }

  ngOnInit(): void {
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
      this.toastr.error("برای خرید وارد شوید");
    }
    
}


showDialog(){
  this.dialog = true;
  console.log(this.dialog);
}
hideDialog(){
  this.dialog = false;
  console.log(this.dialog);
}
model: any = {};
}


//------------------------------------------------------------------------------------------------
// .:: Forgot Password module Class 
//------------------------------------------------------------------------------------------------
@Component({
  selector: 'dialog-forgot-pass',
  templateUrl: 'not-login-dialog.html',
})
export class NotLoginDialog {
  loginForm: FormGroup;
  submitted = false;
  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService,private formBuilder: FormBuilder,
    private toastr: ToastrService) { }


  ngOnInit(): void {
   this.createLoginForm();
  }

  // loginreal(){
  //   this.authService.login(this.model).subscribe(response =>{
  //     console.log(response);
  //     this.closeDialog();
  //     // if(this.authService.decodeToken.role === 'admin'){
  //     //   this.router.navigate(['/admin/dashboard']);
  //     // } else {
  //     //   this.router.navigate(['/customer-panel']);
  //     // }
  //   });
  // }


  createLoginForm(){

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser(){
    console.log(this.loginForm);
    const formData = new FormData();
    formData.append('email', this.loginForm.get('email').value);
    formData.append('password', this.loginForm.get('password').value);
    


      this.authService.login(formData).subscribe(response => {
        console.log(response);

      if(this.authService.decodeToken.role === 'admin'){
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/customer-panel']);
      }

      }, error => {
          this.toastr.error(error);
      })
      
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.loginForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}


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