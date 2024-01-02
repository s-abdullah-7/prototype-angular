import { color, EChartsOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

//Pie Chart Data
export let pieChartData : EChartsOption = {
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
    top: 70,
    itemGap: 50,
    itemWidth: 7,
    itemHeight: 7,
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
      top: 100,
      right: 250,
    }
  ]
}


//Pie Chart Data
export let pieChartAdminData : EChartsOption = {
  title: {
    text: 'USERS',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Internal' },
        { value: 735, name: 'External' },
        { value: 580, name: 'Admin' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};





//Basic area chart
export let basicChartLine : EChartsOption = {
  title:{
    text:'Total Pipeline Mileage',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1385, 1232, 1201, 1224, 1290, 1120, 1110],
      type: 'line',
      areaStyle: {},
    }

  ],

}

//smooth line
export let smoothLineChart : EChartsOption = {
    title:{
    text:'Total Operators',
    left: 'center',

  },
  xAxis: {
    type: 'category',
    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      symbol: "none"
    }
  ]
}

//Progress-Gauge
export let progressGauge : EChartsOption = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '100%',
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 50,
          color: [
            [0.25, '#FF6E76'],
            [0.5, '#FDDD60'],
            [0.75, '#58D9F9'],
            [1, '#7CFFB2']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '80%',
        width: 10,
        offsetCenter: [0, '-0%'],
        itemStyle: {
          color: 'black',


        }
      },
      axisTick: {
        length: 0,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        length: 0,
        lineStyle: {
          color: 'auto',
          width: 5
        }
      },
      axisLabel: {
        color: '#464646',
        fontSize: 20,
        distance: -60,
        rotate: 'tangential',
        formatter: function (value: number) {
          if (value === 0.875) {
            return ''; //Grade A
          } else if (value === 0.625) {
            return ''; //Grade B
          } else if (value === 0.375) {
            return ''; //Grade C
          } else if (value === 0.125) {
            return ''; //Grade D
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-10%'],
        fontSize: 20
      },
      detail: {
        fontSize: 30,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function (value: number) {
          return Math.round(value * 100) + '';
        },
        color: '#464646'
      },
      data: [
        {
          value: 0.7,
          name: '',

        }
      ]
    }
  ]
};

export let dottedLineChart : EChartsOption = {
  title:{
    text:'Reportable Accidents',
    left: 'center',
    top: 30,


  },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]

};

//Basic Bar Chart
export let basicBarChart : EChartsOption = {
  title:{
    text:'Commodity Released',
    left: 'center',
    top: 30,


  },
  xAxis: {
    type: 'category',
    data: ['2016', '2017', '2018', '2019', '2020', '2022']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [90, 20,60, 10, 30, 50, 20],
      type: 'bar'
    }
  ]
}

export let totalCostDotLine : EChartsOption = {
  title:{
    text:'Total Cost',
    left: 'center',
    top: 30,


  },
    xAxis: {
      type: 'category',
      data: ['2016', '2017', '2018', '2019', '2020', '2022']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [10000, 5000, 220000, 10000, 8000, 12000, 12260],
        type: 'line'
      }
    ]

};

export let multipleYaxis : EChartsOption = {
  title:{
    text:"2022 Inspections",
    left:"center"

  },

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '10%',
    bottom: 150
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    show:true,
    top: '100%',
    data: ['Assigned Inspections', 'Inspection Compeleted',]
  },
  xAxis: [
    {
      type: 'category',
      nameRotate: 90,
      axisTick: {
        alignWithLabel: true,

      },
      axisLabel:{
        rotate:90
      }
      ,
      // prettier-ignore
      data: ['Aimee Cauguiran', 'Al Giese', 'Alula Gebrmendhin', 'Bita Emani', 'Bob Gorham', 'Chuck MacDonald', 'Dan Lee', 'Durga Shreshta', 'Enrique Jimenez', 'Ha Nguyen', 'Hossein Monfared', 'Justin Harer','Linda Zigler','Malek Itani','Mark McCaleb','Sampson Tang','Tuan Tran','Xuan Nguyan']
    }
  ],
  yAxis: [
    {
    },
    {
    },
    {

    }
  ],
  series: [
    {
      name: 'Assigned Inspection',
      type: 'bar',
      data: [
        10, 10, 11, 10, 1, 2, 10, 10, 10, 10, 2, 10,1,11,10,12,8,10
      ]
    },
    {
      name: 'Inspection Completed',
      type: 'bar',
      data: [
        1, 4, 6, 6, 0, 2, 5, 5, 6, 6, 2, 5,0,8,6,4,4,8
      ]
    }
  ]
}
