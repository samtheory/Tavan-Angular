import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Photo } from 'src/app/_models/photo';
import { PhotoService } from 'src/app/_services/photo.service';

@Component({
  selector: 'app-slide-show-pic-admin',
  templateUrl: './slide-show-pic-admin.component.html',
  styleUrls: ['./slide-show-pic-admin.component.css']
})
export class SlideShowPicAdminComponent implements OnInit {
 @Input() photo: Photo;
 PhotoForm: FormGroup;
  submitted = false;
  Photo: Photo;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService
    , private router: Router, private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createPhotoFrom();
  }


  createPhotoFrom(){
    this.PhotoForm = this.formBuilder.group({
      name: ['', Validators.required],
      link: [null],
      color: [''],
      file: ['',Validators.required],
      fileSource: ['',Validators.required],
    });
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.PhotoForm.patchValue({
        fileSource: file
      });
    }
  }

 

  updatePhoto(id: number){
    console.log(this.PhotoForm);
    const formData = new FormData();
    formData.append('name', this.PhotoForm.get('name').value);
    formData.append('file', this.PhotoForm.get('fileSource').value);
    formData.append('link', this.PhotoForm.get('link').value);
    formData.append('color', this.PhotoForm.get('color').value);

      this.photoService.updatePhoto(id ,formData).subscribe(() => {
        this.toastr.success('success fully created');
        this.router.navigate(['/admin/dashboard']);

      }, error => {
          this.toastr.error(error);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.PhotoForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.PhotoForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.PhotoForm.reset();
}



onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
}

}
