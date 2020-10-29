// 月结分析
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import IconLabel from './iconLabel'
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import { 
  IScript_dashboard_AnalysisDate_GET  
} from '@service/api'
import { baseContext } from '../baseContext'
import moment from 'moment'


export default (props)=> {
  const {inputInitValue} = useContext(baseContext)
  useEffect(() => {
    if(inputInitValue) {
      initChart()
    }
  }, [inputInitValue]);

  async function initChart() {
    let params = {
      CAL_PRD_ID: inputInitValue
    }
    let nameList = [],uniqueList = [],list1 = [],list2=[]
    let res = await IScript_dashboard_AnalysisDate_GET(params)
    let labels = res.map(e=>e.NAME)
    nameList.push(...labels)
    let preM = moment(new Date()).subtract(1,'months').format('YYYYMM')
    let preRes = await IScript_dashboard_AnalysisDate_GET({CAL_PRD_ID: preM})
    nameList.push(...preRes.map(e=>e.NAME))
    nameList.forEach(e=>{
      if(!uniqueList.includes(e)) {
        uniqueList.push(e)
      }
    })
    let currentIndex = 0,currentIndex2 = 0
    uniqueList.forEach(e=>{
      if(currentIndex <res.length) {
        if(e === res[currentIndex]['NAME']) {
          list1.push(res[currentIndex].AMT)
          currentIndex++
        }else {
          list1.push(undefined)
        }
      }else {
        list1.push(undefined)
      }
      if(currentIndex2 <preRes.length) {
        if(e === preRes[currentIndex2]['NAME']) {
          list2.push(preRes[currentIndex2].AMT)
          currentIndex2++
        }else {
          list2.push(undefined)
        }
      }else {
        list2.push(undefined)
      }
    })
    // return
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('month_analysis_chart'));
    // 绘制图表
    myChart.setOption({
      color: ['#455eed', '#1cd3d6'],
      animation: true,
      // backgroundColor: '#fefefe',
      legend: {
        right: '3%',
        top: '7%',
        textStyle: {
          fontFamily: 'PingFangSC-Regular',
          fontSize: '12px',
          color: 'rgba(52,58,89,0.50)',
        },
        icon: 'circle',
        data: ['本月', '上月'],
      },
      grid: {
        // left: 54,
        left: 70,
        top: 60,
        bottom: 53,
        right: 38,
        // containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            fontFamily: 'PingFangSC-Regular',
            backgroundColor: '#777',
            // color: '#777'
          },
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#000',
        },
        // position: function (pos, params, el, elRect, size) {
        //   var obj = { top: 10 }
        //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30
        //   return obj
        // },
        extraCssText: 'width: 170px',
      },
      xAxis: {
        type: 'category',
        // data: [
        //   '基本工资',
        //   '通讯津贴',
        //   '其他保险公司缴纳',
        //   '住房公积金公司缴纳',
        //   '工伤保险公司缴纳',
        // ],
        data: nameList,
        axisLine: {
          lineStyle: {
            color: '#EAEBEE',
          },
        },
        axisLabel: {
          color: '#bbbdc6',
          fontFamily: 'PingFangSC-Regular',
          lineHeight: 40,
          interval:0,//横轴信息全部显示
          // rotate:10,//-30度角倾斜显示
        },
      },
      yAxis: {
        boundaryGap: [0, '10%'],
        axisTick: {
          show: false,
        },
        nameGap: 20,
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: '#bbbdc6',
          fontFamily: 'PingFangSC-Regular',
          formatter: '{value}',
        },
        name: '人民币/元',
        nameTextStyle: {
          color: '#bbbdc6',
          fontFamily: 'PingFangSC-Regular',
          align: 'center',
        },
        splitLine: {
          lineStyle: {
            color: ['rgba(52,57,89,0.10)'],
            type: 'dashed',
          },
        },
      },
      series: [
        {
          name: '本月',
          type: 'bar',
          barWidth: 20,
          // data: [320, 332, 301, 334, 390],
          data: list1
        },
        {
          name: '上月',
          type: 'bar',
          barWidth: 20,
          // data: [120, 132, 101, 134, 90],
          data: list2
        },
      ],
    });
    //更新数据
    // setTimeout(() => {
    //   var option = myChart.getOption();
    //   option.series[0].data = [320, 332, 301, 334, 390];
    //   option.series[1].data = [120, 132, 101, 134, 90];
    //   myChart.setOption(option)
    // }, 1000);
  }
  
  return (
    <div style={{marginBottom: 41}}>
      <IconLabel title='月结分析'></IconLabel>
      <div id="month_analysis_chart" style={{ width: '100%', height: 255,borderRadius: '6px',border: '1px solid #f1f3f7',marginTop: 16 }}></div>
    </div>
  )
}
// 上月
[
  {id: 101,name: '高温补贴', value: 10}
]
// 下月
[
  {id: 102,name: '住房补贴', value: 20}
]