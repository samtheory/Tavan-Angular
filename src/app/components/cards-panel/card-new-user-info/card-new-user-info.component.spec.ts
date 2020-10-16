import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewUserInfoComponent } from './card-new-user-info.component';

describe('CardNewUserInfoComponent', () => {
  let component: CardNewUserInfoComponent;
  let fixture: ComponentFixture<CardNewUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
