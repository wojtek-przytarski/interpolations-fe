import { Component, OnInit } from '@angular/core';
import { Plot, PlotArgs, Point } from '../api/models';
import { PlotsService } from '../api/plots.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {
  plotArgs: PlotArgs = {
    f: 'x*x*x',
    a: -1,
    b: 1,
    n: 5,
  };
  plot: Plot;
  constructor(private plotsService: PlotsService) {
  }

  ngOnInit(): void {
    this.updatePlot();
  }

  onPlotArgsChanged(plotArgs: PlotArgs) {
    this.plotArgs = plotArgs;
    this.updatePlot();
  }

  private updatePlot() {
    this.plotsService.getPlotData(this.plotArgs).subscribe((data: Plot) => {
      this.plot = data;
    });
  }
}
