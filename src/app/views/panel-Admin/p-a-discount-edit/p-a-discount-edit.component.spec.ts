import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PADiscountEditComponent } from './p-a-discount-edit.component';

describe('PADiscountEditComponent', () => {
  let component: PADiscountEditComponent;
  let fixture: ComponentFixture<PADiscountEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PADiscountEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PADiscountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
