import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-slide-show-pic-admin',
  templateUrl: './slide-show-pic-admin.component.html',
  styleUrls: ['./slide-show-pic-admin.component.css']
})
export class SlideShowPicAdminComponent implements OnInit {
 @Input() header: string;
 @Input() link_navigation: string = '';
 @Input() title: string = '';
 @Input() imagUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
