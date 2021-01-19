import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAOrdersComponent } from './p-a-orders.component';

describe('PAOrdersComponent', () => {
  let component: PAOrdersComponent;
  let fixture: ComponentFixture<PAOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
