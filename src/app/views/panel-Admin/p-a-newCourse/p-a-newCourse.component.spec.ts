/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PANewCourseComponent } from './p-a-newCourse.component';

describe('PANewCourseComponent', () => {
  let component: PANewCourseComponent;
  let fixture: ComponentFixture<PANewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PANewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PANewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
