import { Component, OnInit } from '@angular/core';
import { notFound } from '../../../_Constant/data'
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  DB_const = {
    notFound

  }

  ngOnInit(): void {
  }

}
