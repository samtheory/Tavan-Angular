import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentViewComponent } from './test-component-view.component';

describe('TestComponentViewComponent', () => {
  let component: TestComponentViewComponent;
  let fixture: ComponentFixture<TestComponentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
