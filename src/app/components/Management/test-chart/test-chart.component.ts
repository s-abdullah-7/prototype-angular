import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/chart/chartjs';
import * as echarts from 'echarts';
@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit{


  ngOnInit(): void {


type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};

option && myChart.setOption(option);



var PieDom = document.getElementById('main2')!;
var myChart2 = echarts.init(PieDom);
var option2: EChartsOption;

option2 = {
  title: {
    text: 'PIPELINE MILEAGE BY COMMODITY',
    left: 'center',
    top: 30

  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'left',
    top:70,
    itemGap:50,
    itemWidth: 7,
    itemHeight:7,

  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 2034.78, name: 'Crude Oil' },
        { value: 1461.44, name: 'Refined Product' },
        { value: 192.5, name: 'Other' },
        { value: 191.7, name: 'Jet Fuel' },
        { value: 112.1, name: 'Highly Volatile Liquid(Butane, Propane)' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
      },
      top:100,
      right:250,
    }
  ]
};

option2 && myChart2.setOption(option2);

  }


}
