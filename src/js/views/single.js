import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleCard } from "../component/singleCard";

export const Single = props => {
	// useParams from the layout
	let { singleId, type } = useParams();
	// console.log("singleId:", singleId);
	// console.log("type:", type);

	const { store, actions } = useContext(Context);
	// type here refers to planets or characters, this line search for what data to display, the one that matches singleId
	let data = store[type].find((s, i) => i == singleId);

	return (
		<div className="container">
			<SingleCard data={data} />
		</div>
	);
};
