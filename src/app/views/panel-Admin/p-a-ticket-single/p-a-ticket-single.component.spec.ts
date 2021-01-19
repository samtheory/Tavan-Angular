import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATicketSingleComponent } from './p-a-ticket-single.component';

describe('PATicketSingleComponent', () => {
  let component: PATicketSingleComponent;
  let fixture: ComponentFixture<PATicketSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATicketSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATicketSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
