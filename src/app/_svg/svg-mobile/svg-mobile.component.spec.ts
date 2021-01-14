import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMobileComponent } from './svg-mobile.component';

describe('SvgMobileComponent', () => {
  let component: SvgMobileComponent;
  let fixture: ComponentFixture<SvgMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
