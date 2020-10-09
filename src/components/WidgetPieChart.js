import React, { Fragment } from 'react';

import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#218F76', '#E83350', '#F4C724', '#586776', '#0A79DF'];

const WidgetPieChart = (props) => {
  const { title, data } = props;

  return (
    <Fragment>
      <div className='widgetWrap'>
        <div className='widgetTitle'>{title}</div>
        <div className='widgetValue'></div>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart width={500} height={300}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              startAngle={360}
              endAngle={0}
              innerRadius={65}
              outerRadius={80}
              fill='#0A79DF'
              paddingAngle={7}
              label
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

export default WidgetPieChart;
