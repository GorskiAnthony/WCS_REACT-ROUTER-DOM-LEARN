import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<NavLink to="/">Home </NavLink>
				<NavLink to="/contact">Contact </NavLink>
				<NavLink to="/blog">Blog</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
