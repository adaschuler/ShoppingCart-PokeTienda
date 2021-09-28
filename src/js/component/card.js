import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="">
			<div className="ficha">
				<img className={props.url} src={props.imagen} alt="Card image cap" />
				<div className="ficha-body">
					<h5 className="ficha-title">{props.title}</h5>
					<p className="ficha-text">
						{props.contenido.map((item, index) => {
							return (
								<p key={index}>
									{item.label}: {item.value}
								</p>
							);
						})}
					</p>
					<Link to={props.category + props.id} className="boton">
						Detalle
					</Link>
					<button onClick={() => actions.setShoppingCart(props.title)} className="boton">
						<i className="fa fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	imagen: PropTypes.string,
	title: PropTypes.string,
	peso: PropTypes.string,
	contenido: PropTypes.array,
	id: PropTypes.object,
	category: PropTypes.string
};
