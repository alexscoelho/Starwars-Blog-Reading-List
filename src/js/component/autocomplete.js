import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Autocomplete = props => {
    const { store, actions } = useContext(Context);
    const [value, setValue] = useState("");
	return (
		<form role="search">
            <span>
                <input onChange={e => setValue(e.target.value)} class="form-control" type="search" autocomplete="off" placeholder="search">

                </input>
            </span>
        </form>
	);
};