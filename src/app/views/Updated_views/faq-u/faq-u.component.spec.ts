import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQUComponent } from './faq-u.component';

describe('FAQUComponent', () => {
  let component: FAQUComponent;
  let fixture: ComponentFixture<FAQUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
