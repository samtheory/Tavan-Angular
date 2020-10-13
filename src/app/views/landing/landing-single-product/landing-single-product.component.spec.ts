import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSingleProductComponent } from './landing-single-product.component';

describe('LandingSingleProductComponent', () => {
  let component: LandingSingleProductComponent;
  let fixture: ComponentFixture<LandingSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSingleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
