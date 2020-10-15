import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAEditUserComponent } from './p-a-edit-user.component';

describe('PAEditUserComponent', () => {
  let component: PAEditUserComponent;
  let fixture: ComponentFixture<PAEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
