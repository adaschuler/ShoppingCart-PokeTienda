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
					let linkUrl = index + 1;
					return (
						<Card
							key={index}
							title={item.name}
							img1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
							img2=".png"
							url={item.url}
							category={"/vista-detalle/"}
							id={index}
							indexlink={linkUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};
