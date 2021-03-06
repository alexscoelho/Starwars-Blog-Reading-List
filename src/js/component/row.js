import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Row = props => {
	const { title, data, type } = props;
	const { store, actions } = useContext(Context);
	// const favIcon = ["far fa-heart", "fas fa-heart"];
	console.log("type:", type);

	const makeColumns = () => {
		return data.map((item, index) => {
			item.id = index;
			// item.favorite = false;
			const handleClick = () => {
				item.favorite = true;
				actions.addToFavorites(item);
			};
			return (
				<div key={index} className="col-5">
					<div className="card">
						<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							{/* <p className="card-text">{item.description}</p> */}
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{item.climate || item.gender}</li>
							<li className="list-group-item">{item.population || item.height}</li>
							<li className="list-group-item">{item.terrain || item.birth_year}</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								<Link to={"/" + type + "/" + index}>
									{" "}
									{/* type is defined in home */}
									<button type="button" className="btn btn-info">
										Learn more about it
									</button>
								</Link>
							</a>
							<a href="#" className="card-link">
								<i
									onClick={() => handleClick()}
									className={item.favorite ? "fas fa-heart" : "far fa-heart"}
								/>
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
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">{makeColumns()}</div>
		</div>
	);
};

Row.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	type: PropTypes.string
};
