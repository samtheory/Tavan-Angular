import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsUComponent } from './about-us-u.component';

describe('AboutUsUComponent', () => {
  let component: AboutUsUComponent;
  let fixture: ComponentFixture<AboutUsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
