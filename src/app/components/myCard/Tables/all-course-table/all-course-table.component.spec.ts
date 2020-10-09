import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourseTableComponent } from './all-course-table.component';

describe('AllCourseTableComponent', () => {
  let component: AllCourseTableComponent;
  let fixture: ComponentFixture<AllCourseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCourseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCourseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
