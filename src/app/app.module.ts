import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PlotsComponent } from './plots/plots.component';
import { InterpolationPlotComponent } from './plots/interpolation-plot/interpolation-plot.component';
import { ChartsModule } from 'ng2-charts';
import { PlotArgsPanelComponent } from './plots/plot-args-panel/plot-args-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCommonModule } from './common/project-common.module';
import { MathJaxModule } from 'ngx-mathjax';

@NgModule({
  declarations: [
    AppComponent,
    PlotsComponent,
    InterpolationPlotComponent,
    PlotArgsPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FontAwesomeModule,
    ProjectCommonModule,
    MathJaxModule.forRoot({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
