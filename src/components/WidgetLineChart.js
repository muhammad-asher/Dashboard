import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WidgetLineChart = (props) => {
  const { title } = props;

  const pageViewsData = [
    {
      name: 'Jan 2018',
      Views: 227040,
    },
    {
      name: 'Feb 2018',
      Views: 278300,
    },
    {
      name: 'Mar 2018',
      Views: 345975,
    },
    {
      name: 'Apr 2018',
      Views: 431745,
    },
    {
      name: 'May 2018',
      Views: 536749,
    },
    {
      name: 'Jun 2018',
      Views: 674676,
    },
    {
      name: 'Jul 2018',
      Views: 843980,
    },
    {
      name: 'Aug 2018',
      Views: 1054012,
    },
    {
      name: 'Sept 2018',
      Views: 1317255,
    },
    {
      name: 'Oct 2018',
      Views: 1646346,
    },
    {
      name: 'Nov 2018',
      Views: 2058345,
    },
    {
      name: 'Dec 2018',
      Views: 2512244,
    },
  ];

  return (
    <div className='widgetWrap'>
      <div className='widgetTitle'>{title}</div>
      <div className='widgetValue'></div>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          width={1070}
          height={300}
          data={pageViewsData}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='Views'
            stroke='#f57d00'
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WidgetLineChart;
