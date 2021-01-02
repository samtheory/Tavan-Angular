import { Component, OnInit } from '@angular/core';
import * as DB_const from '../../../_Constant/data'
@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {
  DB_const = DB_const;
 

  ngOnInit(): void {

  }

}
