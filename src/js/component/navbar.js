import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="barra-superior">
			<Link to="/">
				<span className="titulo">PokeTienda</span>
			</Link>
			<div className="">
				<Link className="dropdown">
					<button
						className=""
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Cart {store.shoppingCart.length}
					</button>
					<div className="">
						{store.shoppingCart.map((item, index) => {
							return (
								<a key={index} className="cart-product" href="#">
									{item}
									<button
										className="boton"
										onClick={() => {
											actions.setDeleteShoppingCart(item);
										}}>
										<span>X</span>
									</button>
								</a>
							);
						})}
					</div>
				</Link>
			</div>
		</nav>
	);
};
