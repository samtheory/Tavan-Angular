import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  seedForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private userService: AuthService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createSeedForm();
  }


  createSeedForm(){
    this.seedForm = this.formBuilder.group({
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.seedForm.patchValue({
        fileSource: file
      });
    }
  }

 

  seedUsers(){
    console.log(this.seedForm);
    const formData = new FormData();
    formData.append('file', this.seedForm.get('fileSource').value);

      this.userService.SeedUserwithExcel(formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/admin/dashboard']);

      }, error => {
          this.toastr.error(error);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.seedForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.seedForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.seedForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}
}
