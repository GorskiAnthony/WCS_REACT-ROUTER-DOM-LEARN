/**
 * J'utilise ici le hook useSearchParams de react-router-dom
 * ainsi que le hook useState pour avoir la valeur de l'input et ainsi filtrer le tableau
 */
import { useState } from "react";

/**
 * Le hook useSearchParams permet de recuperer les parametres de la query string
 */
import { Link, useSearchParams } from "react-router-dom";

const blog = [
	{
		id: 1,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		id: 2,
		title: "Ipsam, quibom.",
	},
	{
		id: 3,
		title: "Ouptatibus, quisdam.",
	},
	{
		id: 4,
		title: "Ipsiim, usdam.",
	},
	{
		id: 5,
		title: "Puptatibus, quibu.",
	},
];

const Blog = () => {
	/**
	 * Le hook useSearchParams permet de recuperer les parametres de la query string
	 * - searchParams: contient les parametres de la query string
	 * - setSearchParams: permet de modifier les parametres de la query string
	 */
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredBlog, setFilteredBlog] = useState(blog);

	const handleSearch = (e) => {
		e.preventDefault();
		/**
		 * On modifie les parametres de la query string
		 * Avec comme clé `search` et comme valeur la valeur de l'input
		 */
		/**
		 * Si on souhaite avoir plusieurs params, cet article peut etre utile:
		 * https://ultimatecourses.com/blog/query-strings-search-params-react-router
		 */
		setSearchParams({ search: e.target.value });

		setFilteredBlog(
			blog.filter((post) =>
				post.title.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	};

	return (
		<div>
			<h1>Blog</h1>
			<div>
				{/**
				 * Dans value, on recupere la valeur de la query string avec la clé `search`, nous rajoutons une valeur par defaut vide
				 */}
				<input
					type="text"
					placeholder="Search"
					value={searchParams.get("search") || ""}
					onChange={handleSearch}
				/>
			</div>
			{filteredBlog.map((post) => (
				<ul key={post.id}>
					<Link>{post.title}</Link>
				</ul>
			))}
		</div>
	);
};

export default Blog;
