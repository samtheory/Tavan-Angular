import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATicketComponent } from './p-a-ticket.component';

describe('PATicketComponent', () => {
  let component: PATicketComponent;
  let fixture: ComponentFixture<PATicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
