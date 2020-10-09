import React, { Fragment } from "react";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const WidgetBarChart = (props) => {
	const { data, title } = props;

	return (
		<Fragment>
			<div className="widgetWrap">
				<div className="widgetTitle">{title}</div>
				<div className="widgetValue"></div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 3,
							right: 30,
							left: 0,
							bottom: 3,
						}}
					>
						<CartesianGrid />
						<XAxis dataKey="title" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Value" fill="#F9DDA4" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</Fragment>
	);
};

export default WidgetBarChart;
