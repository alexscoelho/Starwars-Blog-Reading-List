import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { DropDown } from "../component/dropdown";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand">Navbar</a>
				<DropDown favorites={store.favorites} />
			</div>
		</nav>
	);
};
