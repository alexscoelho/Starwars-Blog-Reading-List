import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Row } from "../component/row";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<Row title="Planets" data={store.planets} />
		</div>
	);
};
