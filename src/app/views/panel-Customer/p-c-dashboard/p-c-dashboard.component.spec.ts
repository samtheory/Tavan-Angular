import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCDashboardComponent } from './p-c-dashboard.component';

describe('PCDashboardComponent', () => {
  let component: PCDashboardComponent;
  let fixture: ComponentFixture<PCDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
