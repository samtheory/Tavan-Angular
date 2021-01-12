import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccsessPurchaseUComponent } from './succsess-purchase-u.component';

describe('SuccsessPurchaseUComponent', () => {
  let component: SuccsessPurchaseUComponent;
  let fixture: ComponentFixture<SuccsessPurchaseUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccsessPurchaseUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccsessPurchaseUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
