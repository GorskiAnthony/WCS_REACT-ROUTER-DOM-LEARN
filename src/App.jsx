import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Dev from "./pages/contacts/Dev";
import Marketing from "./pages/contacts/Marketing";

const App = () => {
	/**
	 * Nous allons utiliser la nouvelle version de react-router-dom
	 *
	 * Pour cela, nous allons utiliser le composant `createBrowserRouter` qui va nous permettre de definir le router
	 *
	 * Et le composant `RouterProvider` qui va nous permettre de fournir le router a l'application
	 */

	const router = createBrowserRouter([
		{
			/**
			 * Nous allons definir le path de la route
			 *
			 * Si le path est vide, cela signifie que c'est la route par defaut
			 */
			path: "/",
			/**
			 * Nous allons definir l'element qui sera rendu
			 * Cet element sera rendu si la route est active
			 *
			 */
			element: <Root />,
			/**
			 * Si une erreur 404 est survenue, nous allons afficher un element
			 */
			errorElement: <div>404</div>,
			/**
			 * Nous allons definir les routes enfants
			 * Ces routes seront rendues si la route parent est active
			 * Les routes enfants peuvent avoir des routes enfants
			 */
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "contact",
					element: <Contact />,
					/**
					 * Je définis ici des routes enfants pour le composant Contact
					 */
					children: [
						{
							path: "dev",
							element: <Dev />,
						},
						{
							path: "marketing",
							element: <Marketing />,
						},
					],
				},
				{
					path: "blog",
					element: <Blog />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
