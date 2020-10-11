import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProductsAllComponent } from './landing-products-all.component';

describe('LandingProductsAllComponent', () => {
  let component: LandingProductsAllComponent;
  let fixture: ComponentFixture<LandingProductsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProductsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProductsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
