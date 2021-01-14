import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLocationComponent } from './svg-location.component';

describe('SvgLocationComponent', () => {
  let component: SvgLocationComponent;
  let fixture: ComponentFixture<SvgLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
