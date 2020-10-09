import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { RiDashboardFill } from "react-icons/ri";
import WidgetText from "./WidgetText";
import WidgetBarChart from "./WidgetBarChart";
import WidgetPieChart from "./WidgetPieChart";
import WidgetLineChart from "./WidgetLineChart";
import WidgetStackedAreaChart from "./WidgetStackedAreaChart";

const config = {
	apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
	spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
};

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

const Dashboard = () => {
	const [rows, setRows] = useState([]);
	const [dropdownOptions, setDropdownOptions] = useState([]);
	const [selectedValue, setSelectedValue] = useState("Jan 2018");
	const [organicSource, setOrganicSource] = useState(null);
	const [directSource, setDirectSource] = useState(null);
	const [referralSource, setReferralSource] = useState(null);
	const [socialSource, setSocialSource] = useState(null);
	const [emailSource, setEmailSource] = useState(null);
	const [pageViews, setPageViews] = useState(null);
	const [users, setUsers] = useState(null);
	const [newUsers, setNewUsers] = useState(null);
	const [sourceDataOne, setSourceDataOne] = useState([]);
	const [sourceDataTwo, setSourceDataTwo] = useState([]);
	const [usersData, setUsersData] = useState([]);
	const [pageViewsData, setPageViewsData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (rows.length) {
			getDashboardData("Feb 2018");
		}
	}, [rows]);

	const fetchData = async () => {
		try {
			const res = await Axios.get(url);
			const data = await res.data;

			let rowsData = [];

			let batchRowValues = data.valueRanges[0].values;

			for (let i = 1; i < batchRowValues.length; i++) {
				let rowObject = {};
				for (let j = 0; j < batchRowValues[i].length; j++) {
					rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
				}
				rowsData.push(rowObject);
			}

			setRows(rowsData);
			// // dropdown options
			let dropdownOptions = [];

			for (let i = 0; i < rowsData.length; i++) {
				dropdownOptions.push(rowsData[i].month);
			}

			dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();

			setDropdownOptions(dropdownOptions);
		} catch (error) {
			console.error(error);
		}
	};

	const getDashboardData = (date) => {
		const arr = rows;
		const arrLength = arr.length;

		let selectedValue = date;

		let organicSource = 0;
		let directSource = 0;
		let referralSource = 0;
		let socialSource = 0;
		let emailSource = 0;
		let pageViews = 0;
		let users = 0;
		let newUsers = 0;
		let sourceDataOne = [];
		let sourceDataTwo = [];
		let usersData = [];
		let pageViewsData = [];

		for (let i = 0; i < arrLength; i++) {
			if (date === arr[i]["month"]) {
				organicSource = arr[i].organic_source;
				directSource = arr[i].direct_source;
				referralSource = arr[i].referral_source;
				socialSource = arr[i].social_source;
				emailSource = arr[i].email_source;
				pageViews = arr[i].page_views;
				users = arr[i].users;
				newUsers = arr[i].new_users;

				sourceDataOne.push(
					{
						title: "Organic Source",
						Value: organicSource,
					},
					{
						title: "Direct Source",
						Value: directSource,
					}
				);

				usersData.push(
					{
						name: "Users",
						value: +users,
					},
					{
						name: "New Users",
						value: +newUsers,
					}
				);

				pageViewsData.push({
					name: "Page Views",
					value: +pageViews,
				});
			}
		}

		setSelectedValue(selectedValue);
		setOrganicSource(organicSource);
		setDirectSource(directSource);
		setReferralSource(referralSource);
		setSocialSource(socialSource);
		setEmailSource(emailSource);
		setPageViews(pageViews);
		setUsers(users);
		setNewUsers(newUsers);
		setSourceDataOne(sourceDataOne);
		setSourceDataTwo(sourceDataTwo);
		setUsersData(usersData);
		setPageViewsData(pageViewsData);
	};

	const updateDashboardData = (event) => {
		getDashboardData(event.value);
		setSelectedValue(event.value);
	};

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	return (
		<Container className="dashboard-container">
			<Container fluid>
				<Row className="top-header">
					<Col>
						<h1>
							Dashboard <RiDashboardFill />
						</h1>
					</Col>
					<Col>
						<Dropdown
							className="dashboard-dropdown"
							options={dropdownOptions}
							onChange={updateDashboardData}
							value={selectedValue}
							placeholder="Select an option"
						/>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row className="main-dashboard">
					<Col>
						<WidgetText
							title="Organic Source"
							value={numberWithCommas(+organicSource)}
						/>
					</Col>
					<Col>
						<WidgetText
							title="Direct Source"
							value={numberWithCommas(+directSource)}
						/>
					</Col>
					<Col>
						<WidgetText
							title="Referral Source"
							value={numberWithCommas(+referralSource)}
						/>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<WidgetText
							title="Page Views"
							value={numberWithCommas(+pageViews)}
						/>
					</Col>
					<Col>
						<WidgetText title="Users" value={numberWithCommas(+users)} />
					</Col>
					<Col>
						<WidgetText title="New Users" value={numberWithCommas(+newUsers)} />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<WidgetBarChart title="Source Comparison" data={sourceDataOne} />
					</Col>
					<Col>
						<WidgetPieChart title="Users Comparison" data={usersData} />
					</Col>
				</Row>
			</Container>
			<Container>
				<WidgetLineChart title="Page Views" />
			</Container>
			<Container>
				<Row>
					<Col>
						<WidgetStackedAreaChart title="Sessions Comparison" />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Dashboard;
