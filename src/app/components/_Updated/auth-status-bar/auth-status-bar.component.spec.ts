import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStatusBarComponent } from './auth-status-bar.component';

describe('AuthStatusBarComponent', () => {
  let component: AuthStatusBarComponent;
  let fixture: ComponentFixture<AuthStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthStatusBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
