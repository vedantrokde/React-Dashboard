import {
	AccountCircleOutlined,
	CreditCard,
	Dashboard,
	ExitToApp,
	InsertChart,
	LocalShipping,
	NotificationsNone,
	PersonOutline,
	PsychologyOutlined,
	SettingsApplications,
	SettingsSystemDaydreamOutlined,
	Store,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

import "./Sidebar.scss";

const Sidebar = () => {
	// @ts-ignore:next-line
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="sidebar">
			<div className="head">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">IamAdmin</span>
				</Link>
			</div>
			<hr />
			<div className="body">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Dashboard className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<PersonOutline className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products" style={{ textDecoration: "none" }}>
						<li>
							<Store className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<CreditCard className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShipping className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<InsertChart className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNone className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlined className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlined className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsApplications className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleOutlined className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToApp className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="footer">
				<div
					className="colorOptions"
					onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="colorOptions"
					onClick={() => dispatch({ type: "DARK" })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
