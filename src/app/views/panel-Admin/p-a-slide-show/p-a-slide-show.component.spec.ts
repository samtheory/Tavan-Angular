import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PASlideShowComponent } from './p-a-slide-show.component';

describe('PASlideShowComponent', () => {
  let component: PASlideShowComponent;
  let fixture: ComponentFixture<PASlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PASlideShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PASlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
