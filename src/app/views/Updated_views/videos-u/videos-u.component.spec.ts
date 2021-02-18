import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUComponent } from './videos-u.component';

describe('VideosUComponent', () => {
  let component: VideosUComponent;
  let fixture: ComponentFixture<VideosUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
