import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const DropDown = props => {
	const { favorites, type } = props;
	const { store, actions } = useContext(Context);

	// const handleDelete = index => {
	// 	favorites.filter(current => current !== favorites[index]);
	// };
	let id = null;

	const makeFavorites = () => {
		return favorites.map((item, index) => {
			if (item.hasOwnProperty("birth_year")) {
				id = "characters";
			} else {
				id = "planets";
			}
			return (
				<div key={index}>
					<Link to={"/" + id + "/" + index}>
						<a className="dropdown-item" href="#">
							{item.name}
						</a>
					</Link>
					<span className="delete-icon">
						<i onClick={() => actions.handleDelete(index)} className="fas fa-trash-alt" />
					</span>
				</div>
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
	favorites: PropTypes.array,
	type: PropTypes.string,
	index: PropTypes.number
};
