import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<NavLink to="/contact/dev">Dev </NavLink>
			<NavLink to="/contact/marketing">Marketing</NavLink>
			{/**
			 * Ici, on utilise `<Outlet />` pour afficher le contenu de la route imbriquee dans le fichier `App.jsx`
			 */}
			<Outlet />
		</div>
	);
};

export default Contact;
