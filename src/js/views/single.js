import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleCard } from "../component/singleCard";

export const Single = props => {
	let { singleId, type } = useParams();
	console.log(singleId);

	const { store, actions } = useContext(Context);
	let data = store[type].find((s, i) => i == singleId);

	return (
		<div className="container">
			<SingleCard data={data} />
		</div>
	);
};
