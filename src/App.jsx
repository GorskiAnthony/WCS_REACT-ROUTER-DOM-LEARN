import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Navbar from "./components/Navbar";
import Dev from "./pages/contacts/Dev";
import Marketing from "./pages/contacts/Marketing";

const App = () => {
	return (
		<div>
			{/* Import de la navbar pour demontrer l'interet des liens */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/**
				 * On peut utiliser le composant Route pour definir des routes imbriquees
				 *
				 * Dans ce cas, la racine est `contact` et les routes imbriquees sont `dev` et `marketing`
				 */}
				<Route path="/contact/" element={<Contact />}>
					{/**
					 * Ici, le path c'est `contact/dev` et `contact/marketing`
					 *
					 * Il a comme racine le path de la route parente `contact`
					 *
					 * Les routes en mode imbriqué sont des routes "enfant" de la route parente, et pour avoir un acces, il faut utiliser `<Outlet />` dans la route parente
					 */}
					<Route path="dev" element={<Dev />} />
					<Route path="marketing" element={<Marketing />} />
				</Route>
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</div>
	);
};

export default App;
