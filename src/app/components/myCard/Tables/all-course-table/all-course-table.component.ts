import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-course-table',
  templateUrl: './all-course-table.component.html',
  styleUrls: ['./all-course-table.component.css']
})
export class AllCourseTableComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() { }

  ngOnInit(): void { }
}
