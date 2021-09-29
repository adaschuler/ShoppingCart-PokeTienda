import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
/* import { Search } from "../component/search"; */

export const Pokemones = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPokemon();
	}, []);

	return (
		<div className="">
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
			<div className="responsive center">
				{store.pokemonList.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							/* imagen={item.sprites.front_default} */
							url={item.url}
							category={"/vista-detalle/"}
							id={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
