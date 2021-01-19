import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATeachersComponent } from './p-a-teachers.component';

describe('PATeachersComponent', () => {
  let component: PATeachersComponent;
  let fixture: ComponentFixture<PATeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
