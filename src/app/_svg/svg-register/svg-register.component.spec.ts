import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRegisterComponent } from './svg-register.component';

describe('SvgRegisterComponent', () => {
  let component: SvgRegisterComponent;
  let fixture: ComponentFixture<SvgRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
