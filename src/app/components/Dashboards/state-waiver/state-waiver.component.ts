import { Component, OnInit } from '@angular/core';
import * as chartData2 from '../../../shared/data/chart/chartjs'
import * as chartData from '../../../shared/data/chart/apex';

import {


  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  grid: ApexGrid;

};

@Component({
  selector: 'app-state-waiver',
  templateUrl: './state-waiver.component.html',
  styleUrls: ['./state-waiver.component.scss']
})
export class StateWaiverComponent implements OnInit {

  public isCollapsed1 = false;
  public isClosed1 = false;
  public isCollapsed2 = false;
  public isClosed2 = false;

  chartOptions: any;

  constructor() {
        this.chartOptions = {
      series: [
    {
      name: "Operator Name",
      type: "bar",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 30]
    },
    {
      name: "Line ID",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 43]
    },
    {
      name: "Description",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 39]
    }
  ],
  chart: {
    height: 350,
    type: "line",
    left: "-57"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [0],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "15%"
    }
  },
  yaxis: {
    title: {
      text: ""
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: number) {
        if (typeof y !== "undefined") {
          return y?.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  grid: {
    show: false
  }



    };
  }

  stateWaivers = [
    {
      operatorName: 'AIMEE CAUGUIRAN',
      lineID: '56789',
      description: 'Maintenance and repair waiver',
      leadPSE: 'John Smith',
      status: 'Active',
      applicationDate: '2023-02-20',
      expirationDate: '2024-02-20'
    },
    {
      operatorName: 'AL GIESE',
      lineID: '98765',
      description: 'Safety upgrade waiver',
      leadPSE: 'Sarah Johnson',
      status: 'In Review',
      applicationDate: '2023-03-10',
      expirationDate: '2024-03-10'
    },
    {
      operatorName: 'ALULA GEBRMENDHIN',
      lineID: '12345',
      description: 'Pipeline integrity assessment waiver',
      leadPSE: 'Emma Brown',
      status: 'Expired',
      applicationDate: '2022-12-01',
      expirationDate: '2023-12-01'
    },
    {
      operatorName: 'BITA EMANI',
      lineID: '54321',
      description: 'Emergency repair waiver',
      leadPSE: 'Michael Davis',
      status: 'Active',
      applicationDate: '2023-01-05',
      expirationDate: '2024-01-05'
    },
    {
      operatorName: 'BOB GORHAM',
      lineID: '24680',
      description: 'Routine maintenance waiver',
      leadPSE: 'Jennifer Wilson',
      status: 'Active',
      applicationDate: '2023-04-15',
      expirationDate: '2024-04-15'
    },
    {
      operatorName: 'CHUCK MACDONALD',
      lineID: '13579',
      description: 'Environmental impact assessment waiver',
      leadPSE: 'Emily Miller',
      status: 'In Review',
      applicationDate: '2023-06-20',
      expirationDate: '2024-06-20'
    },
    {
      operatorName: 'DAN LEE',
      lineID: '11223',
      description: 'Safety inspection waiver',
      leadPSE: 'William Brown',
      status: 'Active',
      applicationDate: '2023-07-30',
      expirationDate: '2024-07-30'
    },
    {
      operatorName: 'DURGA SHRESHTA',
      lineID: '99887',
      description: 'Equipment upgrade waiver',
      leadPSE: 'Olivia Garcia',
      status: 'Expired',
      applicationDate: '2023-08-12',
      expirationDate: '2024-08-12'
    },


  ];

  ngOnInit(): void {
  }
  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  Collapsetoggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  Closetoggle2() {
    this.isClosed2 = true
  }

  public apexData = chartData.ApexChartData;
  public PieChartData = chartData2.PieChartData;
  public PieChartOptions = chartData2.PieChartOptions;
  public PieChartType = chartData2.PieChartType;
    public barData = chartData.BarData;

}
