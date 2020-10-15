import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiscountTableComponent } from './card-discount-table.component';

describe('CardDiscountTableComponent', () => {
  let component: CardDiscountTableComponent;
  let fixture: ComponentFixture<CardDiscountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiscountTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiscountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
