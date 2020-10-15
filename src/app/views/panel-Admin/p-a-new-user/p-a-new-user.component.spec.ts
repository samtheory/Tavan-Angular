import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PANewUserComponent } from './p-a-new-user.component';

describe('PANewUserComponent', () => {
  let component: PANewUserComponent;
  let fixture: ComponentFixture<PANewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PANewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PANewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
