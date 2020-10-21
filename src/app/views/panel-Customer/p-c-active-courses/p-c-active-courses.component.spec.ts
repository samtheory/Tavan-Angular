import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCActiveCoursesComponent } from './p-c-active-courses.component';

describe('PCActiveCoursesComponent', () => {
  let component: PCActiveCoursesComponent;
  let fixture: ComponentFixture<PCActiveCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCActiveCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCActiveCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
