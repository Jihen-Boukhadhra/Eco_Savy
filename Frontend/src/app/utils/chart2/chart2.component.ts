import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "PM2.5",
          data: [15, 20, 18, 25, 12, 22, 16],
          color: "#4CAF50" // Green color for PM2.5
        },
        {
          name: "Ozone (O3)",
          data: [30, 28, 35, 32, 28, 30, 33],
          color: "#006400" // Dark green color for Ozone (O3)
        },
        {
          name: "Carbon Monoxide (CO)",
          data: [8, 10, 9, 12, 7, 11, 8],
          color: "#4CAF50" // Green color for Carbon Monoxide (CO)
        },
        {
          name: "Sulfur Dioxide (SO2)",
          data: [4, 5, 3, 6, 4, 5, 4],
          color: "#006400" // Dark green color for Sulfur Dioxide (SO2)
        },
        {
          name: "Nitrogen Dioxide (NO2)",
          data: [18, 15, 20, 22, 16, 18, 20],
          color: "#4CAF50" // Green color for Nitrogen Dioxide (NO2)
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Air Quality Index (AQI) - 100% Stacked Bar"
      },
      xaxis: {
        categories: [
          2017,
          2018,
          2019,
          2020,
          2021,
          2022,
          2023]
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return val + " AQI";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
    

}
