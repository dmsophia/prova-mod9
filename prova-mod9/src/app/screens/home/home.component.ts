import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from '../../services/apiconnect.service';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BarChartComponent], // BarChartComponent não é importado aqui pois é referenciado no template
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  seriesData: number[] = [];

  constructor(private apiConnect: ApiconnectService) {}

  ngOnInit(): void {
    this.apiConnect.getMonthlyAverage().subscribe(data => {
      this.categories = data.map(item => item.month);
      this.seriesData = data.map(item => item.averageDaysOff);
    });
  }
}
