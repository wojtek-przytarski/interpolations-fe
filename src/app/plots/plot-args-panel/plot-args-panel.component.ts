import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PlotArgs } from '../../api/models';

@Component({
  selector: 'app-plot-args-panel',
  templateUrl: './plot-args-panel.component.html',
  styleUrls: ['./plot-args-panel.component.css']
})
export class PlotArgsPanelComponent implements OnInit {
  f = 'x';
  a = -1;
  b = 1;
  n = 5;
  @Output() plotArgs = new EventEmitter<PlotArgs>();
  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  setExampleData(f: string, a: number, b: number, n: number) {
    this.f = f;
    this.a = a;
    this.b = b;
    this.n = n;
    this.updatePlotArgs();
  }

  updatePlotArgs() {
    if (this.a >= this.b) {
      this.errorMessage = '\'to\' must be greater than \'from\'';
    } else if (this.n <= 0) {
      this.errorMessage = '\'Degree\' must be greater than 0';
    } else {
      this.errorMessage = '';
      this.plotArgs.emit({
        f: this.f,
        a: this.a,
        b: this.b,
        n: this.n,
      });
    }
  }

}
