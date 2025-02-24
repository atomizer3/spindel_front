import { Component, effect, inject, OnInit } from '@angular/core';
import { Chart, ChartItem } from "chart.js/auto";
import { StoreDataService } from '../../services/store-data.service';

@Component({
  standalone: true,
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrl: './ng-chart.component.scss'
})
export class NgChartComponent{
  public storeDataService = inject(StoreDataService);
  private chart:any = null;

  constructor(){
    effect(()=>{
      const alco = this.storeDataService.data();
      this.regenerateChart(alco);
    })
  }

  public regenerateChart(alco:any): void {
    if (this.chart){
      this.chart.destroy();
    }
    const ctx = document.getElementById('baseChart') as ChartItem;
    console.log(ctx, alco);
    
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            // label: '# of Votes',
            data: alco,
            borderWidth: 1,
            parsing: {
              xAxisKey: 'ID',
              yAxisKey: 'TEMP_VALUE'
            }  
          }]
        },
        options: {
          // scales: {
          //   y: {
          //     beginAtZero: true
          //   }
          // },
          animation : false,
          maintainAspectRatio : false,
          parsing: {
            xAxisKey: 'ID',
            yAxisKey: 'TEMP_VALUE'
          }  
        }
      });
      
    }
    
  }

  // public chartData: ChartData<'line', {[k:string] : number} []> = {
  //   datasets: [{
  //     data: [{'x':1, y: 22.9038 },{ 'x': 2, y: 22.7805 }],
  //     parsing: {
  //       xAxisKey: 'x',
  //       yAxisKey: 'y'
  //     }        
  //   }]
  // };
  // public lineChartData: ChartConfiguration<'line',any> = {
  //   datasets: [{
  //     // data: this.storeDataService.data()?.resp,
  //     data: [{x:1, y: 22.9038 },{ x: 2, y: 22.7805 }],
  //     parsing: {
  //       xAxisKey: 'x',
  //       yAxisKey: 'y'
  //     }      
  //     // parsing: {
  //     //   xAxisKey: 'ID',
  //     //   yAxisKey: 'TEMP_VALUE'
  //     // }      
  //   }]
  // };
  // // public lineChartData: ChartConfiguration<'line'>['data'] = {
  // //   labels: this.storeDataService.data()?.resp.map( x => x['ID']),
  // //   datasets: [{
  // //     data: this.storeDataService.data()?.resp.map( y => y['TEMP_VALUE'])
  // //   }]
  // // };

  // public lineChartOptions: ChartOptions<'line'> = {
  //   responsive: false
  // };
}

