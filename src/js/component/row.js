import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Row = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const makeColumns = () => {
		return data.map((item, index) => {
			return (
				<div key={index} className="col">
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.description}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Cras justo odio</li>
							<li className="list-group-item">Dapibus ac facilisis in</li>
							<li className="list-group-item">Vestibulum at eros</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								Card link
							</a>
							<a href="#" className="card-link">
								Another link
							</a>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<h2>{title}</h2>
			<div className="row">{makeColumns()}</div>
		</div>
	);
};

Row.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array
};
