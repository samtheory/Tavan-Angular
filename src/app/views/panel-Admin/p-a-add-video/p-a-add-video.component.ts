import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import * as tus from 'tus-js-client';
@Component({
  selector: 'app-p-a-add-video',
  templateUrl: './p-a-add-video.component.html',
  styleUrls: ['./p-a-add-video.component.css']
})
export class PAAddVideoComponent implements OnInit {
  constructor(private http: HttpClient) { }
  categoryForm: FormGroup;
  fileId: string;
  url: string;
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
    console.log('khar');
    this.model.convert = 'auto';
    this.model.parallel_convert = false;
    return this.http.post('https://napi.arvancloud.com/vod/2.0/channels/c1914c18-3737-44be-90c5-3ab7d760136f/videos'
      , this.model, {
        headers: {
          Authorization: 'Apikey 1323c87b-dc78-4d8c-8dbd-4535d30c80df',
          'Accept-Language': 'en'
        }
    }).subscribe(response => {
      console.log(response);
      const resSTR = JSON.stringify(response);
      const resJSON = JSON.parse(resSTR);
      this.id = resJSON.data.id;
    }, error => {
      console.log(error);
    });
  }



  getVideo() {
    return this.http.get('https://napi.arvancloud.com/vod/2.0/videos/' + this.id
      , {
        headers: {
          Authorization: 'Apikey 1323c87b-dc78-4d8c-8dbd-4535d30c80df',
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


  createfile() {
    return this.http.post('https://napi.arvancloud.com/vod/2.0/channels/c1914c18-3737-44be-90c5-3ab7d760136f/files', {}, {
      headers: {
        Authorization: 'Apikey 1323c87b-dc78-4d8c-8dbd-4535d30c80df',
        'Accept-Language': 'en'
      }
    });
  }


  onFileChange(event): void {

    this.pro = 'started';

    // Create a new tus upload
    const file = event.target.files[0];


    const upload = new tus.Upload(file, {
      endpoint: 'https://napi.arvancloud.com/vod/2.0/channels/c1914c18-3737-44be-90c5-3ab7d760136f/files',
      retryDelays: [0, 3000, 5000, 10000, 20000],
      chunkSize: 1048576,
      headers: {
        Authorization: 'Apikey 1323c87b-dc78-4d8c-8dbd-4535d30c80df',
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
        this.fileId = upload.url;

      },
      onAfterResponse(req, res): void {
        console.log(res);

      }
    });
    // Start the upload
    upload.start();
  }

}
