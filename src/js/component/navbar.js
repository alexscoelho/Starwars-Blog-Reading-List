import React, { useContext } from "react";
import { logo } from "../../img/starwars.png";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { DropDown } from "../component/dropdown";

console.log(logo);
export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<a className="navbar-brand">StarWars</a>
				</Link>
				<DropDown favorites={store.favorites} />
			</div>
		</nav>
	);
};
