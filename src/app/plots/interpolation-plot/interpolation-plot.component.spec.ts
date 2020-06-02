import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationPlotComponent } from './interpolation-plot.component';

describe('InterpolationPlotComponent', () => {
  let component: InterpolationPlotComponent;
  let fixture: ComponentFixture<InterpolationPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
