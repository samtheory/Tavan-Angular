import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATeacherEditeComponent } from './p-a-teacher-edite.component';

describe('PATeacherEditeComponent', () => {
  let component: PATeacherEditeComponent;
  let fixture: ComponentFixture<PATeacherEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATeacherEditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATeacherEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
