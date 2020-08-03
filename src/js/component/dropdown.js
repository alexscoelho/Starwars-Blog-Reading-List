import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DropDown = props => {
	const { favorites } = props;
	const makeFavorites = () => {
		return favorites.map((item, index) => {
			return (
				<a key={index} className="dropdown-item" href="#">
					{item}
				</a>
			);
		});
	};
	return (
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
				{makeFavorites()}
			</div>
		</div>
	);
};

DropDown.propTypes = {
	favorites: PropTypes.array
};
