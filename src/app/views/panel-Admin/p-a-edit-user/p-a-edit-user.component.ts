import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import * as $ from 'jquery';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jalaali from 'jalaali-js';

@Component({
  selector: 'app-p-a-edit-user',
  templateUrl: './p-a-edit-user.component.html',
  styleUrls: ['./p-a-edit-user.component.css']
})
export class PAEditUserComponent implements OnInit {
  day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  month = [
    'فروردین',
    'تردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'ابان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  year = [];
  selected = 'option2';
  userForm: FormGroup;
  submitted = false;
  model: any = {};
  user: User;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private userService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    for (var i = 1410; i >= 1300; i--) {
      this.year.push(i);
    }
    this.createUserFrom();
    this.getUser();
  }

  getUser(){
  this.userService.getUser(this.route.snapshot.params['id']).subscribe(user => {
    this.user = user;
    console.log(this.user);
  });

  }

  createUserFrom(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      newPassword: [''],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      lastName: [''],
      isActive:[''],
      address: [''],
      city: [''],
      nezam: ['',Validators.required],
      nezamSource: ['',Validators.required],
      meli: ['',Validators.required],
      meliSource: ['',Validators.required],
      avatar: ['',Validators.required],
      avatarSource: ['',Validators.required],
      birthday: ['']
    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const meli = event.target.files[0];
      this.userForm.patchValue({
        meliSource: meli
      });
    }
  }

  onFile1Change(event) {
  
    if (event.target.files.length > 0) {
      const nezam = event.target.files[0];
      this.userForm.patchValue({
        nezamSource: nezam
      });
    }
  }

  onFile2Change(event) {
  
    if (event.target.files.length > 0) {
      const avatar = event.target.files[0];
      this.userForm.patchValue({
        avatarSource: avatar
      });
    }
  }

  updateUser(){
    console.log(this.userForm);
    const formData = new FormData();
    formData.append('isActive', this.userForm.get('isActive').value);
    formData.append('meli', this.userForm.get('meliSource').value);
    formData.append('avatar', this.userForm.get('avatarSource').value);
    formData.append('nezam', this.userForm.get('nezamSource').value);
    formData.append('firstName', this.userForm.get('firstName').value);
    if(this.userForm.get('newPassword').value){
      formData.append('newPassword', this.userForm.get('newPassword').value);
    }
    formData.append('phoneNumber', this.userForm.get('phoneNumber').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('lastName', this.userForm.get('lastName').value);
    formData.append('city', this.userForm.get('city').value);
    formData.append('address', this.userForm.get('address').value);
    formData.append('birthday' , this.userForm.get('birthday').value);

      this.userService.updateUserAdmin(formData, this.route.snapshot.params['id']).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/admin/AllUsers']);

      }, error => {
          this.toastr.error(error);
      });
  }

  changePassUser(){
    this.userService.changePassUserAdmin(this.model, this.route.snapshot.params['id']).subscribe(next => {
      this.toastr.success("باموفقیت عوض شد");
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.userForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}

FinishDateChange(value: String) {
  var m = jalaali.toGregorian(1395, 1, 23);
  let yyyy: Number = Number(value.slice(0, 4));
  let mm: Number = Number(value.slice(5, 7));
  let dd: Number = Number(value.slice(8, 10));

  let g = jalaali.toGregorian(yyyy, mm, dd);
  value =  g.gy+'-'+g.gm+'-'+g.gd;
  console.log(g.gy + '-' + g.gm + '-' + g.gd);

}

}
