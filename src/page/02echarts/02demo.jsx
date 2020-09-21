import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
export default (props)=> {
  // var myChart = echarts.init(document.getElementById('main'));
  useEffect(() => {
    getData()
    setTimeout(()=>{
      var myChart = echarts.init(document.getElementById('main'));
      //更新数据
      var option = myChart.getOption();
      option.series[0].data = [320, 332, 301, 334, 390];
      option.series[1].data = [120, 132, 101, 134, 90];
      myChart.setOption(option)
    }, 1000)
  }, [])
  function getData() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      color: ['#455eed', '#1cd3d6'],
      animation: true,
      backgroundColor: '#fefefe',
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
        left: 54,
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
        data: [
          '基本工资',
          '通讯津贴',
          '其他保险公司缴纳',
          '住房公积金公司缴纳',
          '工伤保险公司缴纳',
        ],
        axisLine: {
          lineStyle: {
            color: '#EAEBEE',
          },
        },
        axisLabel: {
          color: '#bbbdc6',
          fontFamily: 'PingFangSC-Regular',
          lineHeight: 40,
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
          formatter: '{value}万',
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
          data: []
        },
        {
          name: '上月',
          type: 'bar',
          barWidth: 20,
          // data: [120, 132, 101, 134, 90],
          data: []
        },
      ],
    });
  }
  return (
    <div>
      <div id="main" style={{ width: '100%', height: 255 }}></div>
    </div>
  )
}
