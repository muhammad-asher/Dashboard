import React from 'react';

const WidgetText = (props) => {
  const { title, value, description } = props;

  return (
    <div className='widgetWrap'>
      <div className='widgetTitle'>{title}</div>
      <div className='widgetValue'>
        <div className='value'>{value}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

export default WidgetText;
