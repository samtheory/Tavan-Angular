import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PADiscountNewComponent } from './p-a-discount-new.component';

describe('PADiscountNewComponent', () => {
  let component: PADiscountNewComponent;
  let fixture: ComponentFixture<PADiscountNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PADiscountNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PADiscountNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
