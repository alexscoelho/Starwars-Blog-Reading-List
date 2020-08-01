import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand">Navbar</a>
				<button className="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">
					Search
				</button>
			</div>
		</nav>
	);
};
