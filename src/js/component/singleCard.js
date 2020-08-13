import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const SingleCard = props => {
	const { data } = props;
	console.log("data:", data);

	const { store, actions } = useContext(Context);
	let title;
	let titles1 = ["Diameter", "Climate", "Gravity", "Terrain", "Population"];
	let titles2 = ["Height", "Mass", "Gender", "Birth Year", "Eye Color"];
	if (data.hasOwnProperty("diameter")) {
		title = titles1;
	} else {
		title = titles2;
	}
	return (
		<div className="container mt-2">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://via.placeholder.com/800x600" className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data.name}</h5>
							<p className="card-text">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row more-info">
				<div className="col">
					<h3>Name</h3>
					<p>{data.name}</p>
				</div>
				<div className="col">
					<h3>{title[0]}</h3>
					<p>{data.diameter || data.height}</p>
				</div>
				<div className="col">
					<h3>{title[1]}</h3>
					<p>{data.climate || data.mass}</p>
				</div>
				<div className="col">
					<h3>{title[2]}</h3>
					<p>{data.gravity || data.gender}</p>
				</div>
				<div className="col">
					<h3>{title[3]}</h3>
					<p>{data.terrain || data.birth_year}</p>
				</div>
				<div className="col">
					<h3>{title[4]}</h3>
					<p>{data.population || data.eye_color}</p>
				</div>
			</div>
		</div>
	);
};

SingleCard.propTypes = {
	data: PropTypes.object
};
