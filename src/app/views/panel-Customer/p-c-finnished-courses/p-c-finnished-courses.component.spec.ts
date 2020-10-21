import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCFinnishedCoursesComponent } from './p-c-finnished-courses.component';

describe('PCFinnishedCoursesComponent', () => {
  let component: PCFinnishedCoursesComponent;
  let fixture: ComponentFixture<PCFinnishedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCFinnishedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCFinnishedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
