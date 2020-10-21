import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAAddVideoComponent } from './p-a-add-video.component';

describe('PAAddVideoComponent', () => {
  let component: PAAddVideoComponent;
  let fixture: ComponentFixture<PAAddVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAAddVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
