import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowManageAdminComponent } from './slide-show-manage-admin.component';

describe('SlideShowManageAdminComponent', () => {
  let component: SlideShowManageAdminComponent;
  let fixture: ComponentFixture<SlideShowManageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowManageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowManageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
