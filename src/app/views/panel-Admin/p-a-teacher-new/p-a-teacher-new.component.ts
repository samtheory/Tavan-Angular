import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-p-a-teacher-new',
  templateUrl: './p-a-teacher-new.component.html',
  styleUrls: ['./p-a-teacher-new.component.css']
})
export class PATeacherNewComponent implements OnInit {
  teacherForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private toastr: ToastrService, private teacherService: TeacherService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  createTeacherForm(){

    this.teacherForm = this.formBuilder.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.teacherForm.patchValue({
        fileSource: file
      });
    }
  }
  onFile1Change(event) {
    if (event.target.files.length > 0) {
      const spfile = event.target.files[0];
      this.teacherForm.patchValue({
        spfileSource: spfile
      });
    }
  }

 

  createTeacher(){
    console.log(this.teacherForm);
    const formData = new FormData();
    formData.append('file', this.teacherForm.get('fileSource').value);
    formData.append('title', this.teacherForm.get('title').value);
    formData.append('name', this.teacherForm.get('name').value);
    formData.append('description', this.teacherForm.get('description').value);
    


      this.teacherService.createTeacher(formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/admin/dashboard']);

      }, error => {
          this.toastr.error(error);
      })
      
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.teacherForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.teacherForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.teacherForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}


}
