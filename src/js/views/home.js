import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Row } from "../component/row";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container ">
			<div className="mt-3">
				<Row title="Planets" data={store.planets} type="planets" />
			</div>
			<Row title="Characters" data={store.characters} type="characters" />
		</div>
	);
};
