import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<NavLink to="/contact/dev">Dev </NavLink>
			<NavLink to="/contact/marketing">Marketing</NavLink>
			<Outlet />
		</div>
	);
};

export default Contact;
