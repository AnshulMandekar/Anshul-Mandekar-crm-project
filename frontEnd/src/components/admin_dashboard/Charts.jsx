import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Charts = () => {
  useEffect(() => {
    const leadChart = echarts.init(document.getElementById('leadChart'));
    const visitChart = echarts.init(document.getElementById('visitChart'));

    const leadOption = {
      animation: false,
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 35, name: 'Hot Leads', itemStyle: { color: '#EF4444' } },
          { value: 40, name: 'Warm Leads', itemStyle: { color: '#F59E0B' } },
          { value: 25, name: 'Cold Leads', itemStyle: { color: '#3B82F6' } }
        ]
      }]
    };

    const visitOption = {
      animation: false,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Planned Visits', 'Actual Visits']
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Planned Visits',
        data: [12, 15, 10, 8, 13, 7, 9],
        type: 'line',
        smooth: true
      },
      {
        name: 'Actual Visits',
        data: [10, 13, 8, 7, 12, 6, 8],
        type: 'line',
        smooth: true
      }]
    };

    leadChart.setOption(leadOption);
    visitChart.setOption(visitOption);

    const handleResize = () => {
      leadChart.resize();
      visitChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      leadChart.dispose();
      visitChart.dispose();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Lead Distribution</h3>
        <div id="leadChart" className="h-64"></div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Visit Tracking</h3>
        <div id="visitChart" className="h-64"></div>
      </div>
    </div>
  );
};

export default Charts;