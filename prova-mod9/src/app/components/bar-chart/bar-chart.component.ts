import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() seriesData: number[] = [];
  
  series: any[] = [];
  charts: any = { height: 350, type: 'bar' };
  xaxis: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChartData();
  }

  updateChartData(): void {
    this.xaxis = { categories: this.categories };
    this.series = [{ name: 'Dias de Atestado', data: this.seriesData }];
  }
}
