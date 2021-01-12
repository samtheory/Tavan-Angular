import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesUComponent } from './rules-u.component';

describe('RulesUComponent', () => {
  let component: RulesUComponent;
  let fixture: ComponentFixture<RulesUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
