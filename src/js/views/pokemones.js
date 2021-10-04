import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Pokemones = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPokemon();
	}, []);

	return (
		<div className="">
			<div className="">
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
