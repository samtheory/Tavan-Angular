import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/_services/course.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import jalaali from 'jalaali-js';
import { Course } from 'src/app/_models/course';
import { Video } from 'src/app/_models/video';
import { VideoService } from 'src/app/_services/video.service';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { Category } from 'src/app/_models/category';
import { Session } from 'src/app/_models/session';
@Component({
  selector: 'app-p-a-edit-course',
  templateUrl: './p-a-edit-course.component.html',
  styleUrls: ['./p-a-edit-course.component.css']
})
export class PAEditCourseComponent implements OnInit {
selected = 'option one';
  course: Course;
  video: any = {};
  categoryToAdd: any = {};
  teacherToAdd: any = {};
  sessionToAdd: any = {};
  ////* Akarderon open and close boool 
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;

  teachers: TeacherToList[];
  categories: Category[];
  // .......................................


  panelOpenState = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService, private route: ActivatedRoute , private videoService: VideoService) { }

  courseForm: FormGroup;
  submitted = false;
  public Editor = ClassicEditor;

  ngOnInit(): void {
    this.getCourse();this.route.data.subscribe(data => {
      this.course = data['course'];
      console.log(this.course);
      this.categories = data['categories'];
      this.teachers = data['teachers'];
    });
    this.createCourseFrom();
    
    //  -- I N F O --    
    $('#info').click(function () {
      $('#info').removeClass('bg-green-500 opacity-50');
      $('#info').addClass('bg-green-900');

      $('#video').addClass('bg-green-500 opacity-50');
      $('#session').addClass('bg-green-500 opacity-50');
      $('#category').addClass('bg-green-500 opacity-50');
      $('#video').removeClass('bg-green-900');
      $('#session').removeClass('bg-green-900');
      $('#category').removeClass('bg-green-900');
  
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.information-tab').removeClass(' hidden');
      $('.video-tab').addClass('  hidden');
      $('.category-tab').addClass(' hidden');
      $('.session-tab').addClass(' hidden');
    });
    //  -- V I D E O --    
    $('#video').click(function () {
      $('#video').addClass('bg-green-900');
      $('#video').removeClass('bg-green-500 opacity-50');

      $('#info').addClass('bg-green-500 opacity-50');
      $('#info').removeClass('bg-green-900');
      $('#session').addClass('bg-green-500 opacity-50');
      $('#category').addClass('bg-green-500 opacity-50');
      $('#session').removeClass('bg-green-900');
      $('#category').removeClass('bg-green-900');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.video-tab').removeClass('hidden');
      $('.information-tab').addClass('hidden');
      $('.category-tab').addClass(' hidden');
      $('.session-tab').addClass(' hidden');
    });
  
    //  -- CATEGORY --    
    $('#category').click(function () {
      $('#category').addClass('bg-green-900');
      $('#category').removeClass('bg-green-500 opacity-50');

      
      $('#video').addClass('bg-green-500 opacity-50');
      $('#info').addClass('bg-green-500 opacity-50');
      $('#session').addClass('bg-green-500 opacity-50');
      $('#video').removeClass('bg-green-900');
      $('#info').removeClass('bg-green-900');
      $('#session').removeClass('bg-green-900');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.category-tab').removeClass(' hidden');
      $('.video-tab').addClass('hidden');
      $('.information-tab').addClass('hidden');
      $('.session-tab').addClass(' hidden');
    });
  
    //  -- SESSIONS --    
    $('#session').click(function () {
      $('#session').removeClass('bg-green-500 opacity-50');
      $('#session').addClass('bg-green-900');
      
      
      $('#category').addClass('bg-green-500 opacity-50');
      $('#video').addClass('bg-green-500 opacity-50');
      $('#info').addClass('bg-green-500 opacity-50');
      $('#category').removeClass('bg-green-900');
      $('#video').removeClass('bg-green-900');
      $('#info').removeClass('bg-green-900');
      // .   .   .   H   I   D   E   ||   S   H   o   W   .   .   .   .   .   .
      $('.session-tab').removeClass(' hidden');
      $('.video-tab').addClass('hidden');
      $('.information-tab').addClass('hidden');
      $('.category-tab').addClass(' hidden');
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
      isActive: [''],
      pdfUrl: [''],
      hours: [''],
      suggest: [''],
      titres: [''],
      description: [''],
      started: [''],
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
      spfile:['', Validators.required],
      spfileSource:['', Validators.required],
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

  onFile1Change(event) {
    if (event.target.files.length > 0) {
      const spfile = event.target.files[0];
      this.courseForm.patchValue({
        spfileSource: spfile
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
    if(this.courseForm.get('fileSource').value){
      formData.append('file', this.courseForm.get('fileSource').value);
    }
    if(this.courseForm.get('spfileSource').value){
      formData.append('spfile', this.courseForm.get('spfileSource').value);
    }
    formData.append('title', this.courseForm.get('title').value);
    formData.append('cost', this.courseForm.get('cost').value);
    formData.append('off', this.courseForm.get('off').value);
    formData.append('url', this.courseForm.get('url').value);
    formData.append('isActive', this.courseForm.get('isActive').value);
    formData.append('pdfUrl', this.courseForm.get('pdfUrl').value);
    formData.append('suggest', this.courseForm.get('suggest').value);
    formData.append('hours', this.courseForm.get('hours').value);
    formData.append('description', this.courseForm.get('description').value);
    formData.append('titres', this.courseForm.get('titres').value);
    formData.append('started', this.courseForm.get('started').value);
    formData.append('videoUrl', this.courseForm.get('videoUrl').value);
    formData.append('videoId', this.courseForm.get('videoId').value);


    this.courseService.updateCourse(this.route.snapshot.params['id'] , formData).subscribe(() => {
      this.toastr.success('successfully updated');
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
    this.toastr.success('با موفقیت حذف شد');
    window.location.reload();
  }, error => {
    this.toastr.error(error);
  });
}


deleteCourse() {
  this.courseService.deleteCourse(this.route.snapshot.params['id']).subscribe(next => {
    this.toastr.success('با موفقیت حذف شد');
    this.router.navigate(['/admin/dashboard']);
  }, error => {
    this.toastr.error(error);
  });
}

deleteCategory(id: number , categoryId: number){
this.courseService.removeCategoryofCourse(id , categoryId).subscribe(next => {
  this.toastr.success("با موفقیت حذف شد");
  window.location.reload();
});
}

deleteTeacher(id: number , teacherId: number) {
  this.courseService.removeTeacherofCourse(id , teacherId).subscribe(next => {
    this.toastr.success("با موفقیت حذف شد");
  });
}

addTeacher(id: number) {
  this.courseService.addTeacherToCourse(id , this.teacherToAdd.id).subscribe(next => {
    this.toastr.success("با موفقیت اضافه شد");
    window.location.reload();
  });
}

addCategory(id: number) {
  this.courseService.addCategoryToCourse(id , this.categoryToAdd.id).subscribe(next => {
    this.toastr.success("با موفقیت اضافه شد");
    window.location.reload();
  });
}

addSession(id: number){
  this.courseService.addSession(this.sessionToAdd , id).subscribe(next => {
    if(next){
      const s = JSON.stringify(next);
      const res: Session = JSON.parse(s);

      const session = {
        id: res.id,
        time: res.time
      }

      this.course.sessions.push(session);
    }
    this.toastr.success("با موفقیت اضافه شد");
  });
}
deleteSession(id: number){
  this.courseService.deleteSession(id).subscribe(next => {
    this.toastr.success("با موفقیت حذف شد");
    window.location.reload();
  });
}


}
