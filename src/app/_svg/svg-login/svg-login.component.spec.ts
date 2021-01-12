import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLoginComponent } from './svg-login.component';

describe('SvgLoginComponent', () => {
  let component: SvgLoginComponent;
  let fixture: ComponentFixture<SvgLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
