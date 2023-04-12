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
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact/" element={<Contact />}>
					<Route path="dev" element={<Dev />} />
					<Route path="marketing" element={<Marketing />} />
				</Route>
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</div>
	);
};

export default App;
