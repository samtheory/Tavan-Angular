import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

import * as moment from 'jalali-moment';
@Component({
  selector: 'app-test-component-view',
  templateUrl: './test-component-view.component.html',
  styleUrls: ['./test-component-view.component.css']
})
export class TestComponentViewComponent implements OnInit {
  // dateObject = "";
  constructor(public dialog: MatDialog) {}
  panelOpenState = false;
  dateObject = moment('1395-11-22','jYYYY,jMM,jDD');
  
  //OR if you have initial value you could use following code
  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  
  
  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}