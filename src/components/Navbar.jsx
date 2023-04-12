import { NavLink } from "react-router-dom";
/**
 * Le style est la pour avoir le style "active" pour les liens `NavLink`
 */
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
