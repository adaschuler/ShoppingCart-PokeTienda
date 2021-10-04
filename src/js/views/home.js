import React from "react";
import "../../styles/home.scss";
import { Pokemones } from "../views/pokemones";
/* import { Search } from "../component/search"; */

export const Home = () => {
	return (
		<div className="superior">
			<div className="logo">
				<img
					className=""
					src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
					height="100px"
				/>
			</div>
			<div className="busqueda">
				<input
					className="casilla"
					type="search"
					placeholder="Buscar Pokemones"
					/* onChange={handleChange} */
				/>
				<button type="submit" className="boton">
					<i className="fas fa-search" />
				</button>
			</div>

			<div className="pokemones">
				<Pokemones />
			</div>
		</div>
	);
};
