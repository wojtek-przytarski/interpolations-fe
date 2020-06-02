import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Plot } from '../../api/models';
import { ChartDataSets, ChartOptions, ChartType, Point } from 'chart.js';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/operators';

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
  public lineChartLabels: Label[] = ['-1', '0', '1'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
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
      { data: this.data ? this.data.fx : [], label: 'Original' },
      { data: this.data ? this.data.npv : [], label: 'Interpolated' },
    ];
    this.lineChartLabels = this.data ? this.data.x.map((el) => el.toString()) : [];
  }

}
