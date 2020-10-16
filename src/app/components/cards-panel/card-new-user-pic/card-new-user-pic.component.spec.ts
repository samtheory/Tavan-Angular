import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewUserPicComponent } from './card-new-user-pic.component';

describe('CardNewUserPicComponent', () => {
  let component: CardNewUserPicComponent;
  let fixture: ComponentFixture<CardNewUserPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewUserPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewUserPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
