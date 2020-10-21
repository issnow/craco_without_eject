import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import ReactEcharts from 'echarts-for-react'
export default (props) => {
  const [chartOpt, setChartOpt] = useState({})
  useEffect(()=>{
    fetch('/get/api/book/10/2').then(res=>res.json()).then(res=>{
      console.log(res, 'fetch')
    })
  }, [])
  // 指定图表的配置项和数据
  const getChartOptions = () => {
    setTimeout(() => {
      setChartOpt({
        color: ['#455eed', '#1cd3d6'],
        backgroundColor: '#fefefe',
        // dataset: {
        //   source: [
        //     [
        //       'type',
        //       '基本工资',
        //       '通讯津贴',
        //       '其他保险公司缴纳',
        //       '住房公积金公司缴纳',
        //       '工伤保险公司缴纳',
        //     ],
        //     ['本月', 320, 332, 301, 334, 50],
        //     ['上月', 220, 182, 191, 234, 70],
        //   ],
        // },
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
          boundaryGap: ['10%', '10%'],
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
            data: [320, 332, 301, 334, 390],
          },
          {
            name: '上月',
            type: 'bar',
            barWidth: 20,
            data: [120, 132, 101, 134, 90],
          },
        ],
      })
    }, 1000)
  }
  useEffect(() => {
    getChartOptions()
  }, [])
  return (
    <div>
      echarts
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <ReactEcharts
          key={Math.random() + new Date().getTime()}
          option={chartOpt}
          // onEvents={onEvents}
          notMerge={true}
          lazyUpdate={true}
          // style={{ height: '255px', left: '12px', top: '-8px' }}
          style={{ height: '255px' }}
        />
      </div>
    </div>
  )
}
