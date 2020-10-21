import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCEditProfileComponent } from './p-c-edit-profile.component';

describe('PCEditProfileComponent', () => {
  let component: PCEditProfileComponent;
  let fixture: ComponentFixture<PCEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
