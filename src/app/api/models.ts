export class Plot {
  plotArgs: PlotArgs;
  fx: Array<number>;
  npv: Array<number>;
  x: Array<number>;
}

export class PlotArgs {
  f: string;
  a: number;
  b: number;
  n: number;
}

export class Point {
  x: number;
  y: number;
}
