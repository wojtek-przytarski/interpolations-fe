import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotArgsPanelComponent } from './plot-args-panel.component';

describe('PlotArgsPanelComponent', () => {
  let component: PlotArgsPanelComponent;
  let fixture: ComponentFixture<PlotArgsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotArgsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotArgsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
