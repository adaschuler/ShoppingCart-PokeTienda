import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="barra-superior">
			<div className="nav align-left">
				<Link to="/">
					<span className="titulo">PokeTienda</span>
				</Link>
			</div>

			<div className="align-right">
				<Link className="cart-button dropdown">
					<button
						className="boton"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.shoppingCart.length}
						<i className="fas fa-shopping-cart" />
					</button>
					<div className="cart-product">
						{store.shoppingCart.map((item, index) => {
							return (
								<a key={index} className="" href="#">
									{item}
									<button
										className="boton align-left"
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
