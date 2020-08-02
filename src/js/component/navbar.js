import React from "react";
import { Link } from "react-router-dom";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand">Navbar</a>
				<div className="dropdown">
					<button
						className="btn btn-info dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
