import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAEditCourseComponent } from './p-a-edit-course.component';

describe('PAEditCourseComponent', () => {
  let component: PAEditCourseComponent;
  let fixture: ComponentFixture<PAEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAEditCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
