import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCCourseSingleDetailComponent } from './p-c-course-single-detail.component';

describe('PCCourseSingleDetailComponent', () => {
  let component: PCCourseSingleDetailComponent;
  let fixture: ComponentFixture<PCCourseSingleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCCourseSingleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCCourseSingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
