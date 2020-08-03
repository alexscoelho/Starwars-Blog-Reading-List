import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DropDown = props => {
	const { favorites } = props;
	return (
		<div className="dropdown">
			<button
				className="btn btn-info dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				{favorites}
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
	);
};

DropDown.propTypes = {
	favorites: PropTypes.array
};
