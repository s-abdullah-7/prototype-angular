import { Component, ElementRef,OnInit , ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
// import * as chartData from '../../../shared/data/chart/chartjs';
import * as echarts from 'echarts';
import { echartLineOption } from 'src/app/shared/data/chart/echart';
import { EChartsOption } from 'echarts';

import * as chartData from '../../../../../app/shared/data/chart/custom-echarts';

@Component({
  selector: 'app-test-chart',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit{

  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  ngOnInit(): void {}
  public echartPieOption = chartData.pieChartData;
  public echartBasicLine = chartData.basicChartLine;
  public echartSmoothLine = chartData.smoothLineChart;
  public echartProgressBar = chartData.progressGauge;
  public echartDottedLine = chartData.dottedLineChart;
  public echartBasicBar = chartData.basicBarChart;
  public echartTotalCost = chartData.totalCostDotLine;
  public echartMultipleYaxis = chartData.multipleYaxis;

}
