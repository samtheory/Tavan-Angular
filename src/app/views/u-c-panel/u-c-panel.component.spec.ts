import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCPanelComponent } from './u-c-panel.component';

describe('UCPanelComponent', () => {
  let component: UCPanelComponent;
  let fixture: ComponentFixture<UCPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
