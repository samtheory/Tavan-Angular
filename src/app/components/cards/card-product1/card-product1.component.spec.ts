import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduct1Component } from './card-product1.component';

describe('CardProduct1Component', () => {
  let component: CardProduct1Component;
  let fixture: ComponentFixture<CardProduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProduct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
