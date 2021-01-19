import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PATestComponent } from './p-a-test.component';

describe('PATestComponent', () => {
  let component: PATestComponent;
  let fixture: ComponentFixture<PATestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PATestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PATestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
