import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/_services/course.service';

import jalaali from 'jalaali-js';
@Component({
  selector: 'app-p-a-edit-course',
  templateUrl: './p-a-edit-course.component.html',
  styleUrls: ['./p-a-edit-course.component.css']
})
export class PAEditCourseComponent implements OnInit {
  panelOpenState = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService ) { }

  courseForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    $('#info').click(function () {
      $('#info').addClass('text-red-600 bg-white border-b-4 border-blue-300 ');
      $('#pic').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#video').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#des').removeClass('text-red-600 bg-white border-b-4 border-blue-300');

      $('.information-tab').removeClass(' hidden');
      $('.picture-tab').addClass(' hidden');
      $('.video-tab').addClass('  hidden');
      $('.description-tab').addClass('hidden');
    });

    $('#pic').click(function () {
      $('#info').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#pic').addClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#video').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#des').removeClass('text-red-600 bg-white border-b-4 border-blue-300');

      $('.information-tab').addClass('hidden');
      $('.picture-tab').removeClass('hidden');
      $('.video-tab').addClass('hidden');
      $('.description-tab').addClass('hidden');
    });

    $('#video').click(function () {
      $('#info').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#pic').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#video').addClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#des').removeClass('text-red-600 bg-white border-b-4 border-blue-300');

      $('.information-tab').addClass('hidden');
      $('.picture-tab').addClass('hidden');
      $('.video-tab').removeClass('hidden');
      $('.description-tab').addClass('hidden');
    });

    $('#des').click(function () {
      $('#info').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#pic').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#video').removeClass('text-red-600 bg-white border-b-4 border-blue-300');
      $('#des').addClass('text-red-600 bg-white border-b-4 border-blue-300');

      $('.information-tab').addClass('hidden');
      $('.picture-tab').addClass('hidden');
      $('.video-tab').addClass('hidden');
      $('.description-tab').removeClass('hidden');

      this.createCourseFrom();
    });
  }

  createCourseFrom(){
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

  createCourse(){
    console.log(this.courseForm);
    const formData = new FormData();
    formData.append('file', this.courseForm.get('fileSource').value);
    formData.append('title', this.courseForm.get('title').value);
    formData.append('cost', this.courseForm.get('cost').value);
    formData.append('off', this.courseForm.get('off').value);
    formData.append('description', this.courseForm.get('description').value);
    formData.append('titres', this.courseForm.get('titres').value);
    formData.append('teacher', this.courseForm.get('teacher').value);
    formData.append('started', this.courseForm.get('started').value);
    formData.append('ended', this.courseForm.get('ended').value);
    formData.append('videoUrl', this.courseForm.get('videoUrl').value);
    formData.append('videoId', this.courseForm.get('videoId').value);


      this.courseService.createCourse(formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/index/home']);

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
  let yyyy: Number = Number(value.slice(0, 4));
  let mm: Number = Number(value.slice(5, 7)) ;
  let dd: Number = Number(value.slice(8, 10)) ;

 let g = jalaali.toGregorian(yyyy, mm, dd)
  console.log(g.gy+'-'+g.gm+'-'+g.gd);

}





}
