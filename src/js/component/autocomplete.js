import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Autocomplete = props => {
	const { type } = props;
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const [filteredItem, setFilteredItem] = useState([]);

	useEffect(
		() => {
			setFilteredItem(
				store.planets.filter(planet => {
					return planet.name.toLowerCase().includes(search.toLowerCase());
				})
			);
		},
		[search]
	);
	console.log("item:", filteredItem);
	return (
		<div className="autocomplete">
			<form role="search">
				<span>
					<input
						onChange={e => setSearch(e.target.value)}
						className="form-control"
						type="search"
						placeholder="search"
					/>
				</span>
			</form>
			<ul className="list-group">
				{filteredItem.map((item, index) => {
					if (search != "") {
						return (
							<Link to={"/" + type + "/" + item.id}>
								<a className="list-group-item text-dark" key={index}>
									{item.name}
								</a>
							</Link>
						);
					}
				})}
			</ul>
		</div>
	);
};

Autocomplete.propTypes = {
	type: PropTypes.string
};
