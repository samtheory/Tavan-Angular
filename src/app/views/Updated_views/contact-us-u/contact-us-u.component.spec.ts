import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsUComponent } from './contact-us-u.component';

describe('ContactUsUComponent', () => {
  let component: ContactUsUComponent;
  let fixture: ComponentFixture<ContactUsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
