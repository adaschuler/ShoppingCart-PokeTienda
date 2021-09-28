import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Pokemones = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPokemon();
	}, []);

	return (
		<div className="responsive">
			<h1 className="">PokeTienda</h1>
			<div className="">
				{store.pokemonList.map((item, index) => {
					const dataPokemon = [
						{
							label: "Peso",
							value: item.height
						},
						{
							label: "Other",
							value: item.other
						},
						{
							label: "Imagen",
							value: item.front_default
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen={item.front_default}
							peso={item.height}
							url={item.url}
							contenido={dataPokemon}
							category={"/vista-detalle/"}
							id={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
