import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Plot, PlotArgs } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {
  ROOT_URL = 'https://interpolations.herokuapp.com/api/';

  constructor(private http: HttpClient) {
  }

  getPlotData(data: PlotArgs): Observable<Plot> {
    const params = {
      f: data.f,
      a: data.a.toString(),
      b: data.b.toString(),
      n: data.n.toString(),
    };
    return this.http.get<Plot>(`${ this.ROOT_URL }plots`, { params });
  }
}
