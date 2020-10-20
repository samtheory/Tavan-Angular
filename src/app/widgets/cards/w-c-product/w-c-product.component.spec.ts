import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCProductComponent } from './w-c-product.component';

describe('WCProductComponent', () => {
  let component: WCProductComponent;
  let fixture: ComponentFixture<WCProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WCProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WCProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
