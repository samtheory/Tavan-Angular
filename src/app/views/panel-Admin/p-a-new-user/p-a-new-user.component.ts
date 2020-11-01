import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-p-a-new-user',
  templateUrl: './p-a-new-user.component.html',
  styleUrls: ['./p-a-new-user.component.css']
})
export class PANewUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private userService: AuthService ) { }

  ngOnInit(): void {
    this.createUserFrom();
  }

  createUserFrom(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      lastName: [''],
      isActive:[null],
      nezam: ['',Validators.required],
      nezamSource: ['',Validators.required],
      meli: ['',Validators.required],
      meliSource: ['',Validators.required],
      avatar: ['',Validators.required],
      avatarSource: ['',Validators.required],
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

  createUser(){
    console.log(this.userForm);
    const formData = new FormData();
    formData.append('isActive', this.userForm.get('isActive').value);
    formData.append('meli', this.userForm.get('meliSource').value);
    formData.append('avatar', this.userForm.get('avatarSource').value);
    formData.append('nezam', this.userForm.get('nezamSource').value);
    formData.append('firstName', this.userForm.get('firstName').value);
    formData.append('password', this.userForm.get('password').value);
    formData.append('phoneNumber', this.userForm.get('phoneNumber').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('lastName', this.userForm.get('lastName').value);

      this.userService.AdminRegister(formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/admin/AllUsers']);

      }, error => {
          this.toastr.error(error);
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


}
