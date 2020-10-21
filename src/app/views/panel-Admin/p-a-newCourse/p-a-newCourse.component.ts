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
  categoryForm: FormGroup;
  submitted = false;



  
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router, private courseService: CourseService ) { }

  ngOnInit() {
  }



  createCategoryFrom(){
    this.categoryForm = this.formBuilder.group({
      name_fa: ['', Validators.required],
      name_en: ['', Validators.required],
      description_fa: ['', Validators.required],
      description_en: ['', Validators.required],
      categoryId: [''],
      categoryLevel: [''],
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
      

    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryForm.patchValue({
        fileSource: file
      });
    }
  }

  createCategory(){
    console.log(this.categoryForm);
    const formData = new FormData();
    formData.append('file', this.categoryForm.get('fileSource').value);
    formData.append('name_en', this.categoryForm.get('name_en').value);
    formData.append('name_fa', this.categoryForm.get('name_fa').value);
    formData.append('description_fa', this.categoryForm.get('description_fa').value);
    formData.append('description_en', this.categoryForm.get('description_en').value);
    formData.append('categoryLevel', this.categoryForm.get('categoryLevel').value);
    formData.append('categoryId', this.categoryForm.get('categoryId').value);


      this.courseService.createCourse(formData).subscribe(() => {
        this.toastr.success("success fully created");
        this.router.navigate(['/categories']);

      }, error => {
          this.toastr.error(error);
      })
      
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categoryForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.categoryForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.categoryForm.reset();
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
