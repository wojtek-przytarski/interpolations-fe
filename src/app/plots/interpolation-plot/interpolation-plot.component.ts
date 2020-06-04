import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Plot } from '../../api/models';
import { ChartDataSets, ChartOptions, ChartType, Point } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-interpolation-plot',
  templateUrl: './interpolation-plot.component.html',
  styleUrls: ['./interpolation-plot.component.css']
})
export class InterpolationPlotComponent implements OnInit, OnChanges {
  @Input() data: Plot;

  public lineChartData: ChartDataSets[];
  public lineChartLegend: true;
  public lineChartType = 'line';
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    },
    annotation: {
      annotations: [],
    },
  };

  constructor() {
  }

  ngOnInit(): void {
    this.updateChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChartData();
  }

  private updateChartData(): void {
    console.log(this.data);

    this.lineChartData = [
      {
        data: this.data ? this.data.fx : [],
        label: 'Original',
        fill: false,
        pointRadius: 0,
        pointHitRadius: 3
      },
      {
        data: this.data ? this.data.npv : [],
        label: 'Interpolated',
        fill: false,
        pointRadius: 0,
        pointHitRadius: 3
      },
    ];
    this.lineChartLabels = this.data ? this.getLabels(this.data.x) : [];
  }

  private getLabels(data: Array<number>): Array<string> {
    const labels = [];
    for (let i = 0; i < data.length - 2; i++) {
      labels.push(i % 5 === 0 ? data[i].toFixed(2).toString() : '');
    }
    labels.push(data[data.length - 1]);
    return labels;
  }
}
