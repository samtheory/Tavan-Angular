import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PADashboardComponent } from './p-a-dashboard.component';

describe('PADashboardComponent', () => {
  let component: PADashboardComponent;
  let fixture: ComponentFixture<PADashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PADashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
