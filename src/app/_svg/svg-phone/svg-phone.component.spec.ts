import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPhoneComponent } from './svg-phone.component';

describe('SvgPhoneComponent', () => {
  let component: SvgPhoneComponent;
  let fixture: ComponentFixture<SvgPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
