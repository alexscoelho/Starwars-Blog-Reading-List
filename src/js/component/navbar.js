import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { DropDown } from "../component/dropdown";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<a className="navbar-brand">
						<img className="main-logo" src={require("../../img/starwars.png")} />
					</a>
				</Link>
				<DropDown favorites={store.favorites} />
			</div>
		</nav>
	);
};
