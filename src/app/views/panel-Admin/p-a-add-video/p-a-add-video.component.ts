import { HttpClient, HttpResponse } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'path';
import { promise } from 'protractor';
import * as tus from 'tus-js-client';
@Component({
  selector: 'app-p-a-add-video',
  templateUrl: './p-a-add-video.component.html',
  styleUrls: ['./p-a-add-video.component.css']
})
export class PAAddVideoComponent implements OnInit {
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  categoryForm: FormGroup;
  uploadUrl: string;
  url: string;
  fileId: string;
  model: any = {};
  id: string;
  res: any = {};
  videoId: string;
  palayerUrl: string;

  pro;


  // settings: UppyConfig = {
  //   uploadAPI: {
  //     endpoint: 'https://napi.arvancloud.com/vod/2.0/channels/c1914c18-3737-44be-90c5-3ab7d760136f/files',
  //     headers: {
  //       Authorization: 'Apikey 1323c87b-dc78-4d8c-8dbd-4535d30c80df'
  //     }
  //   },
  //   plugins: {
  //     Webcam: true,
  //     GoogleDrive: true,
  //     Instagram: true,
  //     Facebook: true,
  //     Dropbox: true,
  //     ScreenCapture: true
  //   },
  //   restrictions: {
  //     maxFileSize: 1000000,
  //     maxNumberOfFiles: 10
  //     // minNumberOfFiles: 1,
  //     // allowedFileTypes: ['image/*','pdf/*', 'docs/*']
  //   }

  // };

  ngOnInit(): void {
  }

  createVideo() {
    // console.log('khar');
    this.model.convert = 'auto';
    this.model.parallel_convert = false;
    return this.http.post('https://napi.arvancloud.com/vod/2.0/channels/c1a6ace4-0a9d-4292-9834-ebd9f7978c48/videos'
      , this.model, {
        headers: {
          Authorization: 'Apikey 3d908b59-c28d-411a-9a44-4daa7e3ef9d4',
          'Accept-Language': 'en'
        }
    }).subscribe(response => {
      console.log(response);
      const resSTR = JSON.stringify(response);
      const resJSON = JSON.parse(resSTR);
      this.id = resJSON.data.id;
      this.toastr.success('ویدیو با موفقیت ساخته شد جند دقیقه صبر کنید تا آدرس در اختیار شما قرار گیرد');
    }, error => {
      console.log(error);
    });
  }



  getVideo() {
    return this.http.get('https://napi.arvancloud.com/vod/2.0/videos/' + this.id
      , {
        headers: {
          Authorization: 'Apikey 3d908b59-c28d-411a-9a44-4daa7e3ef9d4',
          'Accept-Language': 'en'
        }
      }).subscribe(response => {
        console.log(response);
        const resSTR = JSON.stringify(response);
        const resJSON = JSON.parse(resSTR);

        this.palayerUrl = resJSON.data.player_url;
        this.videoId = resJSON.data.id;
        
      }, error => {
        console.log(error);
      });
  }

  getuploadUrl(){
    this.toastr.show(this.uploadUrl);
    return this.uploadUrl;
  }

    createfile(file: File) {
        return this.http.post('https://napi.arvancloud.com/vod/2.0/channels/c1a6ace4-0a9d-4292-9834-ebd9f7978c48/files', {}, {
          headers: {
            'Authorization': 'Apikey 3d908b59-c28d-411a-9a44-4daa7e3ef9d4',
            'Accept': 'application/json',
            'Accept-Language': 'en',
            'tus-resumable': '2.2.0',
            'upload-length': file.size.toString(),
            'upload-metadata': 'filename '+btoa(file.name)+',filetype '+btoa(file.type)
          } , observe: 'response'
        }).subscribe(res => {
          console.log(res.headers.get('Location'));
          this.uploadUrl = res.headers.get('Location');
          this.upload(file);
          var patharrey = this.uploadUrl.split('/');
          this.fileId = patharrey[8];
        }, error => {
          this.toastr.error(error)
        });
      
  }


  onFileChange(event) {



    this.pro = 'started';

    // Create a new tus upload
    const file = event.target.files[0];
    
     this.createfile(file);
    
  }


  upload(file: File) {
    const upload = new tus.Upload(file, {
      endpoint: this.uploadUrl,
      uploadUrl: this.uploadUrl,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      chunkSize: 1048576,
      headers: {
        Authorization: 'Apikey 3d908b59-c28d-411a-9a44-4daa7e3ef9d4',
        'Accept-Language': 'en',
      },
      metadata: {
        filename: file.name,
        filetype: file.type
      },
      onError(error): void {
        console.log(error);
      },
      onProgress(bytesUploaded, bytesTotal): void {
        const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');




      },
      onSuccess(): void {
        console.log(file.name, upload.url);
      },
      onAfterResponse(req, res) {
        console.log(res);
        this.uploadUrl = req.getURL();
      }
    });
    // Start the upload
    upload.start();
    
  
  }

}
