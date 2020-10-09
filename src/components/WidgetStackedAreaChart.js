import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan 2018',
    numberOfSessionsPerUser: 3,
    pagePerSession: 8,
    averageSessionTime: 13,
  },
  {
    name: 'Feb 2018',
    numberOfSessionsPerUser: 4,
    pagePerSession: 10,
    averageSessionTime: 16,
  },
  {
    name: 'Mar 2018',
    numberOfSessionsPerUser: 5,
    pagePerSession: 13,
    averageSessionTime: 20,
  },
  {
    name: 'Apr 2018',
    numberOfSessionsPerUser: 6,
    pagePerSession: 16,
    averageSessionTime: 25,
  },
  {
    name: 'May 2018',
    numberOfSessionsPerUser: 8,
    pagePerSession: 20,
    averageSessionTime: 31,
  },
  {
    name: 'Jun 2018',
    numberOfSessionsPerUser: 10,
    pagePerSession: 25,
    averageSessionTime: 39,
  },
  {
    name: 'Jul 2018',
    numberOfSessionsPerUser: 13,
    pagePerSession: 31,
    averageSessionTime: 49,
  },
  {
    name: 'Aug 2018',
    numberOfSessionsPerUser: 16,
    pagePerSession: 39,
    averageSessionTime: 61,
  },
  {
    name: 'Sept 2018',
    numberOfSessionsPerUser: 20,
    pagePerSession: 49,
    averageSessionTime: 76,
  },
  {
    name: 'Oct 2018',
    numberOfSessionsPerUser: 25,
    pagePerSession: 61,
    averageSessionTime: 95,
  },
  {
    name: 'Nov 2018',
    numberOfSessionsPerUser: 31,
    pagePerSession: 76,
    averageSessionTime: 119,
  },
  {
    name: 'Dec 2018',
    numberOfSessionsPerUser: 39,
    pagePerSession: 91,
    averageSessionTime: 149,
  },
];

const WidgetStackedAreaChart = (props) => {
  const { title } = props;

  return (
    <div className='widgetWrap'>
      <div className='widgetTitle'>{title}</div>
      <div className='widgetValue'></div>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Legend />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='numberOfSessionsPerUser'
            stackId='1'
            stroke='#4834DF'
            fill='#4834DF'
          />
          <Area
            type='monotone'
            dataKey='pagePerSession'
            stackId='1'
            stroke='#218F76'
            fill='#218F76'
          />
          <Area
            type='monotone'
            dataKey='averageSessionTime'
            stackId='1'
            stroke='#ce181e'
            fill='#ce181e'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WidgetStackedAreaChart;
