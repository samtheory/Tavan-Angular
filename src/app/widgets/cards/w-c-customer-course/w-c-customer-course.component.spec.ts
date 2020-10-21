import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCCustomerCourseComponent } from './w-c-customer-course.component';

describe('WCCustomerCourseComponent', () => {
  let component: WCCustomerCourseComponent;
  let fixture: ComponentFixture<WCCustomerCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WCCustomerCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WCCustomerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
