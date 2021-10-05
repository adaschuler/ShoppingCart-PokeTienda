import React from "react";
import "../../styles/home.scss";
import { Pokemones } from "../views/pokemones";
import { Categorias } from "../views/categorias";
/* import { Search } from "../component/search"; */

export const Home = () => {
	return (
		<div>
			<div className="superior">
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
			</div>
			<div className="categorias">
				<Categorias />
			</div>
			<div className="pokemones">
				<Pokemones />
			</div>
		</div>
	);
};
