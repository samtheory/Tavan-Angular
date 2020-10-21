import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


import jalaali from 'jalaali-js';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';
@Component({
  selector: 'app-p-a-newCourse',
  templateUrl: './p-a-newCourse.component.html',
  styleUrls: ['./p-a-newCourse.component.css']
})
export class PANewCourseComponent implements OnInit {
  courseForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService ) { }

  ngOnInit() {
  }



  createCategoryFrom(){
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      cost: ['', Validators.required],
      url: ['', Validators.required],
      off: ['', Validators.required],
      videoUrl: [''],
      videoId: [''],
      courseDays: [''],
      isActive: [''],
      teacher: [''],
      titres: [''],
      description: [''],
      started: [''],
      ended: [''],
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.courseForm.patchValue({
        fileSource: file
      });
    }
  }

  createCategory(){
    console.log(this.courseForm);
    const formData = new FormData();
    formData.append('file', this.courseForm.get('fileSource').value);
    formData.append('name_en', this.courseForm.get('name_en').value);
    formData.append('name_fa', this.courseForm.get('name_fa').value);
    formData.append('description_fa', this.courseForm.get('description_fa').value);
    formData.append('description_en', this.courseForm.get('description_en').value);
    formData.append('categoryLevel', this.courseForm.get('categoryLevel').value);
    formData.append('categoryId', this.courseForm.get('categoryId').value);


      this.courseService.createCourse(formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/categories']);

      }, error => {
          this.toastr.error(error);
      })
      
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.courseForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.courseForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.courseForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}

FinishDateChange(value: String) {
  var m = jalaali.toGregorian(1395, 1, 23);
  let yyyy: Number = Number(value.slice(0, 4))  ;
  let mm: Number = Number(value.slice(5, 7)) ;
  let dd: Number = Number(value.slice(8, 10)) ;

 let g = jalaali.toGregorian(yyyy, mm, dd)
  console.log(g.gy+'-'+g.gm+'-'+g.gd);

}

}
