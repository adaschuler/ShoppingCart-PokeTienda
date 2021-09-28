import React from "react";
import "../../styles/home.scss";
import { Pokemones } from "../views/pokemones";

export const Home = () => {
	return (
		<div>
			<div className="pokemones">
				<Pokemones />
			</div>
		</div>
	);
};
