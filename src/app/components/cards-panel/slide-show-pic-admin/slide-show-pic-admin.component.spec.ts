import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowPicAdminComponent } from './slide-show-pic-admin.component';

describe('SlideShowPicAdminComponent', () => {
  let component: SlideShowPicAdminComponent;
  let fixture: ComponentFixture<SlideShowPicAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowPicAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowPicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
