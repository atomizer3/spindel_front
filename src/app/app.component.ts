import { Component, inject } from '@angular/core';
import { GetTempDataComponent } from '../ui/get-temp-data/get-temp-data.component';
import { StoreDataService } from '../services/store-data.service';
import { NgChartComponent } from '../ui/ng-chart/ng-chart.component';

@Component({
  selector: 'app-root',
  imports: [GetTempDataComponent,NgChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public storeDataService = inject(StoreDataService);
}
