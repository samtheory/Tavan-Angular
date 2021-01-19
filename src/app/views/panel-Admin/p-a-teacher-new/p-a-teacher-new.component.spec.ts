import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATeacherNewComponent } from './p-a-teacher-new.component';

describe('PATeacherNewComponent', () => {
  let component: PATeacherNewComponent;
  let fixture: ComponentFixture<PATeacherNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATeacherNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATeacherNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
