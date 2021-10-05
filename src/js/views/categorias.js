import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardType } from "../component/cardtype";

export const Categorias = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchType();
	}, []);

	return (
		<div className="">
			<div className="categoriasgeneral">
				{store.typeList.map((item, index) => {
					return (
						<CardType
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
