import { useState } from "react";
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
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredBlog, setFilteredBlog] = useState(blog);

	const handleSearch = (e) => {
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
