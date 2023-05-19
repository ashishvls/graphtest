// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-graphpage',
//   templateUrl: './graphpage.component.html',
//   styleUrls: ['./graphpage.component.css']
// })
// export class GraphpageComponent {

// }

import { Component, ViewChild,Input } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-graphpage',
    templateUrl: './graphpage.component.html',
    styleUrls: ['./graphpage.component.css']
  })
export class GraphpageComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;

  @Input() apiData:any

  forcastPressure:any[]=[]
  forcastDate:any[]=[]

  constructor() {
    setTimeout(()=>{
        this.apiData.items.array.forEach((data:any) => {
      this.forcastPressure.push(data.pressure)
      this.forcastDate.push(data.date)
    });
   
    },3000)



    // this.apiData.items.array.forEach((data:any) => {
    //   this.forcastPressure.push(data.pressure)
    //   this.forcastDate.push(data.date)
    // });
   
    
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          // data: this.forcastPressure
          data:[12,48,78,89,78,45,98,485,87,4]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.forcastDate
      }
    };
  }
}
