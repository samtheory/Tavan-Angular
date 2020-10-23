import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/_services/course.service';

import jalaali from 'jalaali-js';
import { Course } from 'src/app/_models/course';
@Component({
  selector: 'app-p-a-edit-course',
  templateUrl: './p-a-edit-course.component.html',
  styleUrls: ['./p-a-edit-course.component.css']
})
export class PAEditCourseComponent implements OnInit {

  course: Course;
  ////* Akarderon open and close boool 
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  // .......................................


  panelOpenState = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService, private route: ActivatedRoute) { }

  courseForm: FormGroup;
  submitted = false;

  ngOnInit(): void {

    this.getCourse();
    //  -- I N F O --    
    $('#info').click(function () {
      $('#info').removeClass('border-teal-300 bg-teal-200');
      $('#info').addClass('text-red-600 bg-white  border-blue-300 ');
      $('#video').removeClass('text-red-600 bg-white  border-blue-300');
      $('#video').addClass('bg-teal-200  border-teal-300');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.information-tab').removeClass(' hidden');
      $('.video-tab').addClass('  hidden');
      this.createCourseFrom();
    });
    //  -- V I D E O --    
    $('#video').click(function () {
      $('#video').removeClass('border-teal-300 bg-teal-200');
      $('#video').addClass('text-red-600 bg-white  border-blue-300');
      $('#info').removeClass('text-red-600 bg-white  border-blue-300');
      $('#info').addClass('bg-teal-200  border-teal-300');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.information-tab').addClass('hidden');
      $('.video-tab').removeClass('hidden');
    });
  }  
  
  createCourseFrom() {
    this.courseForm = this.formBuilder.group({
      title: [this.course.title, Validators.required],
      cost: [this.course.cost, Validators.required],
      url: [this.course.url, Validators.required],
      off: [this.course.off, Validators.required],
      videoUrl: [this.course.media.videoUrl],
      videoId: [this.course.media.videoUrl],
      courseDays: [this.course.courseDays],
      isActive: [''],
      teacher: [this.course.teacher],
      titres: [this.course.titres],
      description: [this.course.description],
      started: [this.course.started],
      ended: [this.course.ended],
      file: ['', Validators.required],
      fileSource: ['', Validators.required],
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

  getCourse(){
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
    });
  }

  updateCourse() {
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


    this.courseService.updateCourse(this.route.params['id'] , formData).subscribe(() => {
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
    let mm: Number = Number(value.slice(5, 7));
    let dd: Number = Number(value.slice(8, 10));

    let g = jalaali.toGregorian(yyyy, mm, dd);
    console.log(g.gy + '-' + g.gm + '-' + g.gd);

  }





}
