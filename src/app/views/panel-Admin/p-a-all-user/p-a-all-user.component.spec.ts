import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAAllUserComponent } from './p-a-all-user.component';

describe('PAAllUserComponent', () => {
  let component: PAAllUserComponent;
  let fixture: ComponentFixture<PAAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAAllUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
