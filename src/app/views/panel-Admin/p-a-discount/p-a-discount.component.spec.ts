import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PADiscountComponent } from './p-a-discount.component';

describe('PADiscountComponent', () => {
  let component: PADiscountComponent;
  let fixture: ComponentFixture<PADiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PADiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PADiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
