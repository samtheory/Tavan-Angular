import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Teacher } from 'src/app/_models/teacher';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-p-a-teacher-edite',
  templateUrl: './p-a-teacher-edite.component.html',
  styleUrls: ['./p-a-teacher-edite.component.css']
})
export class PATeacherEditeComponent implements OnInit {
  teacherForm: FormGroup;
  submitted = false;
  teacher: Teacher;
  constructor(private http: HttpClient, private toastr: ToastrService, private teacherService: TeacherService,
    private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createTeacherForm();
    this.getTeacher(this.route.snapshot.params['id']);
  }


  getTeacher(id: number)
  {
     this.teacherService.getTeacher(id).subscribe(teacher => {
       this.teacher = teacher
     }, error => {
       this.toastr.error(error);
     });
  }


  createTeacherForm(){

    this.teacherForm = this.formBuilder.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      sky_password:  [''],
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


 

  updateTeacher(){
    console.log(this.teacherForm);
    const formData = new FormData();
    if(this.teacherForm.get('fileSource').value){
      formData.append('file', this.teacherForm.get('fileSource').value);
    }
    formData.append('title', this.teacherForm.get('title').value);
    formData.append('name', this.teacherForm.get('name').value);
    formData.append('sky_password', this.teacherForm.get('sky_password').value);
    formData.append('description', this.teacherForm.get('description').value);
    


      this.teacherService.updateTeacher(this.route.snapshot.params['id'],formData).subscribe(() => {
        this.toastr.success('success fully updated');
        this.router.navigate(['/admin/dashboard']);

      }, error => {
          this.toastr.error(error);
      })
      
  }

  updateSkyRoomTeacher(){
    this.teacherService.createOrupdateTeacherSkyUser(this.teacher.id).subscribe(next => {
      this.toastr.success("با موفقیت در اسکای رو اپدیت شد");
    });
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
