import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const DropDown = props => {
	const { favorites } = props;
	const { store, actions } = useContext(Context);
	// const handleDelete = index => {
	// 	favorites.filter(current => current !== favorites[index]);
	// };
	const makeFavorites = () => {
		return favorites.map((item, index) => {
			return (
				<a key={index} className="dropdown-item" href="#">
					{item}
					<span className="delete-icon">
						<i onClick={() => actions.handleDelete(index)} className="fas fa-trash-alt" />
					</span>
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
