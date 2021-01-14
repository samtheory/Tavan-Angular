import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPostcodeComponent } from './svg-postcode.component';

describe('SvgPostcodeComponent', () => {
  let component: SvgPostcodeComponent;
  let fixture: ComponentFixture<SvgPostcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgPostcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
