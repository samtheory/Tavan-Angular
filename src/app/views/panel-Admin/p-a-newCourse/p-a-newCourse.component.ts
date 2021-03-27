import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { FormControl } from '@angular/forms';


import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';
import jalaali from 'jalaali-js';
import { start } from 'repl';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { Category } from 'src/app/_models/category';
@Component({
  selector: 'app-p-a-newCourse',
  templateUrl: './p-a-newCourse.component.html',
  styleUrls: ['./p-a-newCourse.component.css']
})
export class PANewCourseComponent implements OnInit {
  public Editor = ClassicEditor;
  lessons = [];
  teachers: TeacherToList[];
  categories: Category[];
  courseForm: FormGroup;
  submitted = false;
 

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.categories = data['categories'];
      this.teachers = data['teachers'];
    });
    this.createCourseFrom();
  }

  get f() { return this.courseForm.controls; }
  get t() { return this.f.sessions as FormArray; }



  createCourseFrom(){

    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      cost: ['', Validators.required],
      url: ['', Validators.required],
      off: ['', Validators.required],
      categoriesId: [''],
      teachersId: [''],
      videoUrl: [''],
      videoId: [''],
      isActive: [''],
      suggest: [''],
      hours: [''],
      maxUsers: [''],
      pdfUrl: [''],
      titres: [''],
      description: [''],
      started: [''],
      sessions: new FormArray([]), 
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
      spfile:['', Validators.required],
      spfileSource:['', Validators.required]
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

  GetlessonsNum (value : number){
    this.lessons = [];
     for (let index = 0; index < value; index++) {
       this.lessons.push(1);
     }
   }

   onChangeTickets(value : number) {
    if (this.t.length < value) {
        for (let i = this.t.length; i < value; i++) {
            this.t.push(this.formBuilder.group({
                time: ['', Validators.required],
            }));
        }
    } else {
        for (let i = this.t.length; i >= value; i--) {
            this.t.removeAt(i);
        }
    }
}

  createCourse(){
    this.FinishDateChange(this.courseForm.get('started').value);
    console.log(this.courseForm);
    const formData = new FormData();
    formData.append('file', this.courseForm.get('fileSource').value);
    formData.append('spfile', this.courseForm.get('spfileSource').value);
    this.courseForm.get('categoriesId').value.forEach(categoryId => {
      formData.append('categoriesId[]', categoryId);
    });
    for (const teacherId of  this.courseForm.get('teachersId').value) {
      formData.append('teachersId[]', teacherId);
    }

    if(this.courseForm.get('maxUsers').value){
      formData.append('maxUsers', this.courseForm.get('maxUsers').value);
    }
      formData.append('sessions', JSON.stringify(this.courseForm.get('sessions').value));
    
    formData.append('title', this.courseForm.get('title').value);
    formData.append('cost', this.courseForm.get('cost').value);
    formData.append('isActive', this.courseForm.get('isActive').value);
    formData.append('pdfUrl', this.courseForm.get('pdfUrl').value);
    formData.append('suggest', this.courseForm.get('suggest').value);
    formData.append('hours', this.courseForm.get('hours').value);
    formData.append('url', this.courseForm.get('url').value);
    formData.append('off', this.courseForm.get('off').value);
    formData.append('description', this.courseForm.get('description').value);
    formData.append('titres', this.courseForm.get('titres').value);
    formData.append('started', this.courseForm.get('started').value);
    formData.append('videoUrl', this.courseForm.get('videoUrl').value);
    formData.append('videoId', this.courseForm.get('videoId').value);

    


      this.courseService.createCourse(formData).subscribe(() => {
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

FinishDateChange(value: String) {
  var m = jalaali.toGregorian(1395, 1, 23);
  let yyyy: Number = Number(value.slice(0, 4))  ;
  let mm: Number = Number(value.slice(5, 7)) ;
  let dd: Number = Number(value.slice(8, 10)) ;

 let g = jalaali.toGregorian(yyyy, mm, dd);
  value =  g.gy+'-'+g.gm+'-'+g.gd;
}








}
