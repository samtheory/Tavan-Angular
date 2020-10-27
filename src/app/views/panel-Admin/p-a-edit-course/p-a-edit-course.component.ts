import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/_services/course.service';

import jalaali from 'jalaali-js';
import { Course } from 'src/app/_models/course';
import { Video } from 'src/app/_models/video';
import { VideoService } from 'src/app/_services/video.service';
@Component({
  selector: 'app-p-a-edit-course',
  templateUrl: './p-a-edit-course.component.html',
  styleUrls: ['./p-a-edit-course.component.css']
})
export class PAEditCourseComponent implements OnInit {

  course: Course;
  video: any = {};
  ////* Akarderon open and close boool 
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  // .......................................


  panelOpenState = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService, private route: ActivatedRoute , private videoService: VideoService) { }

  courseForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.getCourse();
    this.createCourseFrom();
    
    //  -- I N F O --    
    $('#info').click(function () {
      $('#info').removeClass('border-teal-300 bg-teal-200');
      $('#info').addClass('text-red-600 bg-white  border-blue-300 ');
      $('#video').removeClass('text-red-600 bg-white  border-blue-300');
      $('#video').addClass('bg-teal-200  border-teal-300');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.information-tab').removeClass(' hidden');
      $('.video-tab').addClass('  hidden');
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
    formData.append('url', this.courseForm.get('url').value);
    formData.append('isActive', this.courseForm.get('isActive').value);
    formData.append('courseDays', this.courseForm.get('courseDays').value);
    formData.append('description', this.courseForm.get('description').value);
    formData.append('titres', this.courseForm.get('titres').value);
    formData.append('teacher', this.courseForm.get('teacher').value);
    formData.append('started', this.courseForm.get('started').value);
    formData.append('ended', this.courseForm.get('ended').value);
    formData.append('videoUrl', this.courseForm.get('videoUrl').value);
    formData.append('videoId', this.courseForm.get('videoId').value);


    this.courseService.updateCourse(this.route.snapshot.params['id'] , formData).subscribe(() => {
      this.toastr.success('success fully created');
      this.router.navigate(['/admin/dashboard']);

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

  addVideo(courseId: number)
  {
    this.videoService.createVideo(courseId , this.video).subscribe(next => {
      if(next){
        const vid = JSON.stringify(next);
        const res: Video = JSON.parse(vid);
        const video = {
          id: res.id,
          url : res.url,
          title: res.title,
          videoId: res.videoId
        };
        this.course.videos.push(video);
      }
      this.toastr.success('با موفقیت اضافه شد');
    });
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


deleteVideo(id: number) {
  this.videoService.deleteVideo(id).subscribe(next => {
    this.toastr.success('successfully deleted');
  });
}


deleteCourse(id: number) {
  this.videoService.deleteVideo(id).subscribe(next => {
    this.toastr.success('successfully deleted');
  });
}


}
